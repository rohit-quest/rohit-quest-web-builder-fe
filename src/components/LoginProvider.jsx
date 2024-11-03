import React from "react";
import { ImportConfig } from "../configs/ImportConfig";
const LoginProvider = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="hidden md:flex flex-col text-center md:w-1/2  w-1/2 justify-center items-center max-w-[750px] m-auto">
        <div>
          <img
            src={ImportConfig.welcome}
            className="w-full drop-shadow-xl"
            alt="Hero_Banner"
          />
        </div>
      </div>
      <div className="w-full h-screen md:w-1/2">{children}</div>
    </div>
  );
};

export default LoginProvider;
