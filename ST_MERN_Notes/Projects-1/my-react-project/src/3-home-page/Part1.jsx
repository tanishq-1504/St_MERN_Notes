import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
const Part1 = (props) => {
  return (
    <div className=" w-full h-full flex items-center border-4 ">
      <div className=" ">
        <LeftContent />
      </div>

      <div className=" ">
        <RightContent users={props.users} />
      </div>
    </div>
  );
};

export default Part1;
