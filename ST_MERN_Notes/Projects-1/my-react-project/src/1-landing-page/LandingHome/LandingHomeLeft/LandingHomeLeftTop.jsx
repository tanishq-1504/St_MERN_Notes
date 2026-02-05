import React from "react";
import { useNavigate } from "react-router";

const LandingHomeLeftTop = () => {
  const navigate = useNavigate();

  function handleNavigateToRegisterPage() {
    navigate("/register");
  }
  return (
    <div className="space-y-7">
      <div className="text-6xl pl-10 pt-10 pb-3 space-y-3">
        <h1>Knowledge </h1>
        <h1>That Fits Your Style.</h1>
      </div>
      <div className=" text-2xl pl-10 space-y-1">
        <h1>A selective platform to connect great tuitors  </h1>
        <h1>around the globe.</h1>
      </div>
      <div className="pl-10 space-x-7">
        <button
          onClick={handleNavigateToRegisterPage}
          className="bg-white rounded-xl cursor-pointer pt-4 pb-4 pl-10 pr-10 text-2xl border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b] hover:-translate-y-1 transition-transform duration-300">
          Get started today
        </button>
        <button className="bg-[#FFF200] rounded-xl cursor-pointer pt-4 pb-4 pl-7 pr-7 text-2xl border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b] hover:-translate-y-1 transition-transform duration-300">
          Our Plans
        </button>
      </div>
    </div>
  );
};

export default LandingHomeLeftTop;
