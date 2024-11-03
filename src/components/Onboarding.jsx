import React, { useState, useEffect } from "react";
import { OnBoarding } from "@questlabs/react-sdk";
import { mainConfig } from "../configs/AppConfig";
import { generalFunctions } from "../configs/generalFunctions";
import axios from "axios";
import { useAtom } from "jotai";
import { UserAtom } from "../Atoms/AtomStores";
import { useNavigate } from "react-router-dom";
import LoginProvider from "./LoginProvider";
const Onboarding = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState(null);
  const [userAtom, setUserAtom] = useAtom(UserAtom);
  async function handleGetAnswers() {
    const UserAnswers = {
      fullName: answers["ca-7367b25e-8628-4b0e-8dd3-2e4f6e3970d2"],
      email: localStorage.getItem("userCredentials")
        ? JSON.parse(localStorage.getItem("userCredentials")).email
        : "",
      phoneNumber: answers["ca-6ea6907a-bd85-475f-9c39-1bb15f6cd7b6"],
      dob: answers["ca-cbd0c81a-db79-48b6-8341-e2648d7ca558"],
      role: answers["ca-1287711c-2617-470e-87a2-1df8682a3a77"],
    };
    let { url, headers } = generalFunctions.createUrl(
      `users/${generalFunctions.getUserId()}`
    );
    let response = await axios.patch(url, UserAnswers, {
      headers: { ...headers, entityId: query.get("organization") },
    });

    if (response.data.success === true) {
      localStorage.setItem("userRecords", JSON.stringify(response.data.data));
      localStorage.setItem("organizationId", response.data.data.entityId);
      setUserAtom(response.data.data);
    }
  }
  return (
    <LoginProvider>
      <div className="flex flex-col flex-1 h-full justify-center items-center">
        <OnBoarding
          questId={mainConfig.QUEST_ID}
          userId={generalFunctions.getUserId()}
          token={generalFunctions.getUserToken()}
          controlBtnType="Buttons"
          headingScreen={[
            {
              name: "Share your details",
              desc: "Welcome back, Please complete your details",
            },
          ]}
          singleChoose="modal3"
          multiChoice="modal2"
          styleConfig={{
            Form: { width: "100%", background: "transparent", maxWidth: "400px" },
            Topbar: {},
            Heading: {
              fontSize: "24px",
              lineHeight: "32px",
              letterSpacing: "-2%",
            },
            Description: {
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "500",
              color: "#939393",
            },
            Input: { lineHeight: "20px", color: "white" },
            Label: { fontWeight: "500", color: "white" },
            TextArea: {},
            PrimaryButton: {background: "#0dacde"},
            SecondaryButton: {},
            SingleChoice: { style: {color: "white", background: "#192231"}, selectedStyle: {} },
            MultiChoice: { style: {}, selectedStyle: {} },
            ProgressBar: {
              completeTabColor: "",
              currentTabColor: "",
              pendingTabColor: "",
            },
            Footer: { FooterStyle: {}, FooterText: {}, FooterIcon: {} },
          }}
          answer={answers}
          getAnswers={handleGetAnswers}
          nextBtnText="Submit Details"
          setAnswer={setAnswers}
          showFooter={false}
        />
      </div>
    </LoginProvider>
  );
};

export default Onboarding;
