import React from 'react'
import LeftContentTrainer from './LeftContentTrainer';
import RightContentTrainer from './RightContentTrainer/RightContentTrainer';

const Trainers = () => {
    return (
    <div className=" w-full h- flex items-center border-4 bg-[#C8F0D2] ">
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