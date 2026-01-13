import React from "react";
import LandingNavbar from "./LandingNavbar";
import LandingAbout from "./LandingAbout";
import LandingServices from "./LandingServices";

const LandingPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="bg-[#FFFCEB] w-full h-full ">
        <div className="pt-1">
          <LandingNavbar />
        </div>
      </div>
      <div className="bg-[#bee6c7] w-full h-full ">
        <div className="pt-3">
          <LandingAbout />
        </div>
      </div>
      <div className="bg-[#bee6c7] w-full h-full ">
        <div className="pt-3">
          <LandingServices />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
