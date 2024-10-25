import { mainConfig } from "./AppConfig";
export const generalFunctions = {
  getUserId: () => {
    let userId = localStorage.getItem("questUserId");
    return userId;
  },
  getUserToken: () => {
    let token = localStorage.getItem("questUserToken");
    return token;
  },
  getOrganizationId: () => {
    let organizationId = localStorage.getItem("organizationId");
    return organizationId;
  },
  getLastLoginSession: () => {
    let lastLoginSession = localStorage.getItem("lastLoginSession");
    return lastLoginSession;
  },

  getUserCredentials: () => {
    let questUserCredentials = JSON.parse(
      localStorage.getItem("questUserCredentials")
    );
    return questUserCredentials;
  },

  getUserRecords: () => {
    let userRecords = JSON.parse(localStorage.getItem("userRecords"));
    return userRecords;
  },

  logout: () => {
    localStorage.removeItem("userCredentials");
    localStorage.removeItem("UserAnswers");
    localStorage.removeItem("questUserId");
    localStorage.removeItem("questUserToken");
    localStorage.removeItem("questUserCredentials");
    localStorage.removeItem("userRecords");
    localStorage.removeItem("organizationId");
  },
  createUrl: (apiString) => {
    const url = `${mainConfig.QUEST_BASE_URL}${apiString}`;
    const headers = {
      apiKey: mainConfig.QUEST_API_KEY,
      userId: generalFunctions.getUserId(),
      token: generalFunctions.getUserToken(),
      entityId: generalFunctions.getOrganizationId(),
    };

    return {
      url,
      headers,
    };
  },
};
