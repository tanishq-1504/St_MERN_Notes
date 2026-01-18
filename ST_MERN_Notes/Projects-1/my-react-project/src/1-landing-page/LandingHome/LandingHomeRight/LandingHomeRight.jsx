import React from "react";
import LandingHomeRightTop from "./LandingHomeRightTop";
import LandingHomeRightBottom from "./LandingHomeRightBottom/LandingHomeRightBottom";

const LandingHomeRight = () => {
  return (
    <div>
      <div>
        <div className="w-full h-105">
          <LandingHomeRightTop />
        </div>
        <div className="w-full h-105 pt-7 pl-2">
          <LandingHomeRightBottom />
        </div>
      </div>
    </div>
  );
};

export default LandingHomeRight;
