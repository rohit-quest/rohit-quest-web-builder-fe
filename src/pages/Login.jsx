import React, { useEffect } from "react";
import axios from "axios";
import { generalFunctions } from "../configs/generalFunctions";
import { useAtom } from "jotai";
import { UserAtom } from "../Atoms/AtomStores";
import { useNavigate } from "react-router-dom";
import { QuestLogin, Toast } from "@questlabs/react-sdk";
import LoginProvider from "../components/LoginProvider";
import { mainConfig } from "../configs/AppConfig";

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
    axios(`https://staging-api.questlabs.ai/api/v2/entities/${mainConfig.QUEST_ENTITY_ID}/campaigns/${mainConfig.QUEST_ID}?platform=REACT`, {
      headers: {
        apiKey: mainConfig.QUEST_API_KEY,
        userId: userId,
        token: token,
        entityId: mainConfig.QUEST_ENTITY_ID,
      }
    }).then(res => {
      if (res?.data?.success) {
        let data = res.data.data;
        let answers = {}
        let gotAnswer = data.actions.forEach((ele) => {
          console.log(ele)
          if (ele.actionId == "ca-7367b25e-8628-4b0e-8dd3-2e4f6e3970d2" && ele?.answers?.length) {
            answers["fullName"] = ele.answers[0];
            return
          }
        });
        if (answers?.fullName) {
          localStorage.setItem("UserAnswers", JSON.stringify(answers));
          setUserAtom(answers);
          navigate("/generate");
        } else {
          navigate("/onboarding");
        }
      }
    })
  };

  return (
    <LoginProvider>
      <div className="h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="flex flex-col flex-1 h-full justify-center items-center">
          <QuestLogin
            googleClientId="55807106386-g68a2ecrld4ul9dppvla4ns6qnn9957t.apps.googleusercontent.com"
            google={false}
            email={true}
            // redirectUri="https://web-craft-quest.netlify.app/login"
            // redirectURL="https://web-craft-quest.netlify.app/onboarding"
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
