import React from 'react'
import RightContentTrainerNavBar from './RightContentTrainerNavBar';
import TrainerInfo from './TrainerInfo';

const RightContentTrainer = () => {
  return (
    <div className="flex flex-col fixed top-0 right-0 bg-[#FFF5E1] border-4 border-black p-4 h-screen gap-4 w-357">
      <div>
      <RightContentTrainerNavBar/>
      </div>
      <TrainerInfo/>
    </div>

  )
}

export default RightContentTrainer;