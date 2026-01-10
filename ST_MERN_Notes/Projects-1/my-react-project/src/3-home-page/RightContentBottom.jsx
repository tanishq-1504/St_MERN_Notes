import React from "react";
import SelectionBar from "./RightContentBottom/SelectionBar";
// import Users from "../profiles'/Users";
const RightContentBottom = (props) => {
  return (
    <div className="bg-[#F7F3F0] border-black border-2 h-full w-full flex flex-col ">
      <SelectionBar users={props.users} />
    </div>
  );
};

export default RightContentBottom;
