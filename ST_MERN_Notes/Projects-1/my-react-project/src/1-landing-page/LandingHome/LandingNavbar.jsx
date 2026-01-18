import React from "react";
import { Link, useNavigate } from "react-router";

const LandingNavbar = () => {
  const navigate = useNavigate();

  function handleNavigateToLoginPage() {
    navigate("/login");
  }

  function handleNavigateToRegisterPage() {
    navigate("/register");
  }

  return (
    <div className="w-screen h-20 bg-[#FFFCEB] flex justify-between">
      <div className="pl-12 pt-6 flex space-x-10 ">
        <Link className="bg-amber-400 cursor-pointer rounded-full p-6 border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b]">
          Logo
        </Link>
        <h1 className="text-5xl pt-2">JEDI</h1>
      </div>

      <div className="pr-10 pt-8 space-x-10">
        <Link className="text-xl cursor-pointer">Home</Link>
        <Link className="text-xl cursor-pointer">About</Link>
        <Link className="text-xl cursor-pointer">Services</Link>
        <Link className="text-xl cursor-pointer">Live support</Link>
        <Link className="text-xl cursor-pointer">Our plans</Link>
        <button
          onClick={handleNavigateToLoginPage}
          className="bg-[#FFF200] rounded-xl cursor-pointer hover:-translate-y-1 transition-transform duration-300 pt-2 pb-2 pl-10 pr-10 text-2xl border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b]">
          Login
        </button>
      </div>
    </div>
  );
};

export default LandingNavbar;
