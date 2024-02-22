import React from "react";
import Logo from "../ui/logo";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div 
      className="animate-pulse duration-700"

      >
      <Logo/>

      </div>
    </div>
  );
};

export default Loading;
