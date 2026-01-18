import React from "react";
import { Link } from "react-router";

const LandingHomeBottomLeftRight = () => {
  return (
    <div className="h-80 w-1/2 font-medium ">
      <div className="text-3xl pb-4 pt-15">
      <h1>Community insights</h1>
      </div>
      <div className="text-xl pb-4 ">
      <p>All communications done through our</p>
      <p>platform is highly encrypted and fully</p>
      <p>secure, we care about privacy!</p>
      </div>
      <div>
        <Link className="underline font-semibold hover:-translate-y-1 transition-transform duration-300">Check the community</Link>
      </div>
    </div>
  );
};

export default LandingHomeBottomLeftRight;
