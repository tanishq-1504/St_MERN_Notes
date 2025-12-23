import React from "react";
import { Link } from "react-router";

const RightContentTrainerNavBar = () => {
  return (
    <div className="h-20 w-full flex items-center gap-4">
      <Link to="/profile" className="px-3 py-2 border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b] font-bold text-xl hover:-translate-y-1 transition-transform duration-300">
        <i className="ri-arrow-left-line"></i>
      </Link>
      <div className="flex items-center gap-4 ml-auto">
        <input
          type="text"
          placeholder="Find Courses,Trainers,etc"
          name="search"
          className="bg-[#FFF5E1] pl-3 pr-[250px] py-2.5 border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b] "
        />
        <button className="px-3 py-2 border-2 font-bold text-xl border-gray-900 shadow-[6px_6px_0px_#1e293b] ">
          <i className="ri-notification-3-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default RightContentTrainerNavBar;
