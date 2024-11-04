import React, { useEffect } from "react";
import axios from "axios";
import { generalFunctions } from "../configs/generalFunctions";
import { useAtom } from "jotai";
import { UserAtom } from "../Atoms/AtomStores";
import { useNavigate } from "react-router-dom";
import { QuestLogin, Toast } from "@questlabs/react-sdk";
import LoginProvider from "../components/LoginProvider";

const Login = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);
  const [userAtom, setUserAtom] = useAtom(UserAtom);
  useEffect(() => {
    if (query.get("organizationId")) {
      localStorage.setItem("organizationId", query.get("organizationId"));
    }
  }, []);
  const handleSubmit = async (e) => {
    const { userId, userCredentials, token } = e;
    if (userId && token) {
      const existingUserId = localStorage.getItem("userId");
      if (existingUserId && existingUserId !== userId) {
        localStorage.removeItem("UserAnswers");
      }
      localStorage.setItem("questUserId", userId);
      localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
      localStorage.setItem("questUserToken", token);
      localStorage.setItem("lastLoginSession", new Date().getTime());
    }
    try {
      let organizationId =
        query.get("organizationId") || localStorage.getItem("organizationId");
      if (organizationId && organizationId !== "") {
        localStorage.setItem("organizationId", organizationId);
        let { url, headers } = generalFunctions.createUrl(
          `users/${userId}?entityId=${organizationId}`
        );
        const response = await axios.get(url, { headers });
        if (response.data.success === false) {
          navigate("/onboarding?organization=" + organizationId);
        } else {
          let userData = response.data.data;
          if (!userData.name || !userData.companyRole) {
            navigate("/onboarding?organization=" + organizationId);
          } else {
            localStorage.setItem(
              "userRecords",
              JSON.stringify(response.data.data)
            );
            setUserAtom(response.data.data);
            navigate("/");
          }
        }
      } else {
        let { url, headers } = generalFunctions.createUrl(
          `users/${userId}/entities`
        );
        const response = await axios.get(url, { headers });
        if (response.data.success === false) {
          navigate("/onboarding?organization=false");
        } else {
          let entities = response.data.data;
          if (entities.length == 0) {
            navigate("/onboarding?organization=false");
          } else if (entities.length == 1) {
            localStorage.setItem("organizationId", entities[0].entityId);
            localStorage.setItem("userRecords", JSON.stringify(entities[0]));
            setUserAtom(entities[0]);
            navigate("/");
          } else {
            navigate("/select-organization");
          }
        }
      }
    } catch (error) {
      console.error("Error fetching claimed status:", error);
    }
  };

  return (
    <LoginProvider>
      <div className="h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="flex flex-col flex-1 h-full justify-center items-center">
          <QuestLogin
            googleClientId="55807106386-g68a2ecrld4ul9dppvla4ns6qnn9957t.apps.googleusercontent.com"
            google={true}
            email={true}
            redirectUri="https://web-craft-quest.netlify.app/login"
            redirectURL="https://web-craft-quest.netlify.app/onboarding"
            styleConfig={{
              Heading: {
                fontSize: "24px",
                color: "white",
                lineHeight: "32px",
              },
              Description: {},
              Input: {},
              Label: {},
              TextArea: {},
              PrimaryButton: {
                color: "white",
                background: "#3B82F6",
                border: "none"
              },
              SecondaryButton: {
                color: "white",
                background: "#1c2532"
              },
              Form: { boxShadow: "none", background: '#1f2937 ' },
              Footer: { FooterStyle: {}, FooterText: {}, FooterIcon: {} },
              IconStyle: { BorderColor: "", Background: "", color: "" },

            }}
            showFooter={false}
            descriptionText="Welcome to Quest"
            onSubmit={handleSubmit}
            onError={(e) => Toast.error({ text: e.error })}
            backgroundColor="red"
          />
        </div>
      </div>
    </LoginProvider>
  );
};

export default Login;
