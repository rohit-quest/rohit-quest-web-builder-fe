import React from "react";
import { ImportConfig } from "../configs/ImportConfig";
const LoginProvider = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <div className="hidden md:flex flex-col text-center md:w-1/2  w-1/2 justify-center items-center p-12">
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
