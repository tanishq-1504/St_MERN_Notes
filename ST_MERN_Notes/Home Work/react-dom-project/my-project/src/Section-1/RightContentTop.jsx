import { Search } from "lucide-react";
import React from "react";

const RightContentTop = () => {
  return (
    <div className="h-full w-full bg-[#F1FF70] flex flex-col items-center justify-center border-2">
      <h1 className="text-5xl pr-25 pb-3 font-bold text-shadow-4xl font-family">Find your next Teach</h1>
      <h1 className="text-5xl font-bold pl-25 pb-10">To reach the next Level</h1>

      <form className="flex items-center gap-5 shadow-2xl">
        <input
          type="text"
          placeholder="Search By Name..."
          name="search"
          className="bg-[#FFF5E1] pl-3 pr-[250px] py-5 border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b]"
        />
          <button
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
            className="hover:={{ y: -3 }} pl-5 pr-5 pb-2 pt-2 bg-[#FFF5E1] text-gray-900 font-bold border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b]"type="submit">
           <Search />Search
          </button>
      </form>
    </div>
  );
};

export default RightContentTop;



