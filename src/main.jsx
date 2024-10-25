import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QuestProvider } from "@questlabs/react-sdk";
import { mainConfig } from "./configs/AppConfig";
import '@questlabs/react-sdk/dist/style.css'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QuestProvider
        apiKey={mainConfig?.QUEST_API_KEY}
        entityId={mainConfig?.QUEST_ENTITY_ID}
        themeConfig={{
          backgroundColor: "white",
        }}
        apiType="STAGING"
      >
        <App />
      </QuestProvider>
    </BrowserRouter>
  </StrictMode>
);
