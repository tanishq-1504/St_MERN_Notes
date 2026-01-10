import React from "react";

const TrainerInfo = () => {
  return (
    <div className="h-full w-full pl-4 bg-[#FFF5E1] flex flex-col overflow-hidden">
      <div className="flex justify-between pb-5 shrink-0">
        <h1 className="font-bold text-6xl font-">Trainer info</h1>
        <h1 className=" pr-4 pt-5 font-bold text-4xl font-family">Work experience</h1>
      </div>
      <section className="flex-1 overflow-y-auto">
        <div className="flex justify-between pr-4">
          <div className="h-100 w-230  bg-[#F3BA2F] border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b]"></div>
          <div className="h-100 w-100  bg-white border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b]"></div>
        </div>
        <div className="flex justify-between pt-10 pr-4">
          <div className="h-100 w-100 bg-white border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b]"></div>
          <div className="h-100 w-230  bg-[#4b607f] border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b]"></div>
        </div>
        <div className="flex justify-between pt-10 pr-4">
          <div className="h-100 w-230  bg-[#f3701e] border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b]"></div>
          <div className="h-100 w-100  bg-white border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b]"></div>
        </div>
      </section>

    </div>
  );
};

export default TrainerInfo;
