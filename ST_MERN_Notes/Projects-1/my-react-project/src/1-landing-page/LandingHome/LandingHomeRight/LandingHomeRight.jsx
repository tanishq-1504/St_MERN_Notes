import React from "react";
import LandingHomeRightTop from "./LandingHomeRightTop";
import LandingHomeRightBottom from "./LandingHomeRightBottom/LandingHomeRightBottom";

const LandingHomeRight = () => {
  return (
    <div className="relative w-full">
      
      <div className="w-full">
        <LandingHomeRightTop />
      </div>

      <div className="absolute top-[53.5%] left-0 w-full z-10 pl-2">
        <LandingHomeRightBottom />
      </div>

    </div>
  );
};

export default LandingHomeRight;
