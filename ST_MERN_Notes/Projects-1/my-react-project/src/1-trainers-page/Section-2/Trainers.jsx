import React from 'react'
import LeftContentTrainer from './LeftContentTrainer';
import RightContentTrainer from './RightContentTrainer/RightContentTrainer';

const Trainers = () => {
    return (
    <div className=" w-full h-full flex items-center border-4 bg-[#BEE6C7] ">
      <div className=" ">
        <LeftContentTrainer />
      </div>

      <div className=" ">
        <RightContentTrainer/>
      </div>
    </div>
  );
};

export default Trainers;