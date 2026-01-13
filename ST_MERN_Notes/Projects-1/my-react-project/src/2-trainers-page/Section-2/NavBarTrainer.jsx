import {
  GraduationCap,
  GraduationCapIcon,
  House,
  LogOut,
  Settings,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";
import "remixicon/fonts/remixicon.css";

const NavBarTrainer = () => {
  return (
    <div>
      <div>
        <Link to="/profile" className="font-medium cursor-pointer text-6xl bg-[#C8F0D2]  ">
          <i className="ri-code-box-line "></i> JEDI
        </Link>
        <br></br>
      </div>
      <div className="justify-items-start pt-30 ">
        <Link
          to="/profile"
          className="hover:-translate-y-1 transition-transform duration-300 pt-1 pl-1 pr-3 pb-3 hover:bg-black hover:text-[#bee6c7] font-medium text-xl flex items-center gap-2">
          <House />
          Home
        </Link>
        <br></br>
        <button className="hover:-translate-y-1 transition-transform duration-300 pt-1 pl-1 pr-3 pb-3 hover:bg-black hover:text-[#bee6c7] font-medium text-xl flex items-center gap-2">
          <i className="ri-calendar-2-line"></i> Schedule
        </button>
        <br></br>
        <Link
          to="/trainer"
          className="hover:-translate-y-1 transition-transform duration-300 pt-1 pl-1 pr-3 pb-3 hover:bg-black hover:text-[#bee6c7] font-medium text-xl flex items-center gap-2 ">
          <GraduationCap />
          Trainers
        </Link>
        <br></br>
        <button className="hover:-translate-y-1 transition-transform duration-300 pt-1 pl-1 pr-3 pb-3 hover:bg-black hover:text-[#bee6c7] font-medium text-xl flex items-center gap-2">
          <ShieldCheck />
          Policy
        </button>
        <br></br>
      </div>
      <div className="justify-items-start pt-90 ">
        <button className="hover:-translate-y-1 transition-transform duration-300 pt-1 pl-1 pr-3 pb-3 hover:bg-black hover:text-[#bee6c7] font-medium text-xl flex items-center gap-2">
          <Settings />
          Preferance
        </button>
        <br></br>
      </div>
    </div>
  );
};

export default NavBarTrainer;
