import React from "react";
import LandingHomeLeft from "./LandingHomeLeft/LandingHomeLeft";
import LandingHomeRight from "./LandingHomeRight/LandingHomeRight";

const LandingHome = () => {
  return (
    <div className=" flex ">
      <div className="w-1/2 h-210 flex"> 
        <LandingHomeLeft />
      </div>
      <div className="w-1/2 h-210 flex">
        <LandingHomeRight />
      </div>
    </div>
  );
};

export default LandingHome;
