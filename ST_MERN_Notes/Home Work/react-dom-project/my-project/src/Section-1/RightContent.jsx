import React from "react";
import RightContentTop from "./RightContentTop";
import RightContentBottom from "./RightContentBottom";

const RightContent = (props) => {
  return (
    <div className="flex flex-col bg-[#FFF5E1] border-4 p-4 h-[870px] gap-4 w-357">
      <div className="flex-1">
        <RightContentTop />
      </div>

      <div className="flex-1">
        <RightContentBottom users={props.users} />
      </div>
    </div>
  );
};

export default RightContent;
