import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const ProfileCard = ({ img, name, degree }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative h-80 w-72 shadow-[8px_8px_0px_#1e293b]">

      <button
        className="absolute top-2 right-2 hover:-translate-y-1 transition-transform duration-300"
        onClick={() => setLiked(!liked)}
      >
        <i
          className={`ri-heart-${liked ? "fill" : "line"} text-2xl transition-all duration-200 ${
            liked ? "text-red-600" : "text-black"
          }`}
        ></i>
      </button>

      <img
        src={img}
        alt="teacher"
        className="h-full w-full object-cover"
      />

      <div className="absolute bottom-0 w-72 bg-pink-200 text-black pl-3 pr-5 pt-3 pb-5">
        <h1>{name}</h1>
        <h1>{degree}</h1>

        <div className="flex justify-end">
          <button className="hover:-translate-y-1 transition-transform duration-300 pl-5 pr-5 pt-1 pb-1 border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b]">
            More Info.
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileList = () => {
  return (
    <div className="flex items-center gap-8">

      <ProfileCard
        img="https://images.unsplash.com/photo-1729939292295-1a674ec2cfca?w=600&auto=format&fit=crop&q=60"
        name="Mr. Subba Rao"
        degree="PhD in Maths & Science"
      />

      <ProfileCard
        img="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=60"
        name="Mrs. Anjali Sharma"
        degree="MSc Chemistry"
      />

      <ProfileCard
        img="https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&auto=format&fit=crop&q=60"
        name="Mr. Dev Patel"
        degree="M.Tech Physics"
      />

      <ProfileCard
        img="https://media.istockphoto.com/id/2160473955/photo/male-teacher-explaining-math-in-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=g4IjVMksyBEf8qQ_fHzuRN8L8XrWhBPG7iyAP9kGx3c="
        name="Mr. Raghav Nair"
        degree="MSc Mathematics"
      />

    </div>
  );
};

export default ProfileList;

