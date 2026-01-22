import React from "react";
import LandingNavbar from "./LandingHome/LandingNavbar";
import LandingAbout from "./LandingAbout/LandingAbout";
import LandingServices from "./LandingServices/LandingServices";
import LandingHome from "./LandingHome/LandingHome";
import LandingOurPlans from "./LandingOurPlans/LandingOurPlans";
import LandingLiveSupport from "./LandingLiveSupport/LandingLiveSupport";

const LandingPage = () => {
  return (
    <div className=" w-full h-screen">
      <div className="bg-[#FFFCEB] w-full h-full ">
        <div>
          <LandingNavbar />
        </div>
          <div className=" pl-5 pr-5 pt-20">
            <LandingHome />
          </div>
      </div>
      <div className="bg-[#FFFCEB] w-full h-full ">
        <div className="pt-30">
          <LandingAbout />
        </div>
      </div>
      <div className="bg-[#FFFCEB] w-full h-full ">
        <div className="pt-3">
          <LandingServices />
        </div>
      </div>
      <div className="bg-[#FFFCEB] w-full h-full ">
        <div className="pt-3">
          <LandingLiveSupport />
        </div>
      </div>
      <div className="bg-[#FFFCEB] w-full h-full ">
        <div className="pt-3">
          <LandingOurPlans />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
