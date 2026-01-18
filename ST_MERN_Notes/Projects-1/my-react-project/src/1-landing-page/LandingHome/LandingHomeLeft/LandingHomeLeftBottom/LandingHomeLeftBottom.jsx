import React from 'react'
import LandingHomeLeftBottomLeftLeft from './LandingHomeLeftBottomLeftLeft'
import LandingHomeBottomLeftRight from './LandingHomeBottomLeftRight'

const LandingHomeLeftBottom = () => {
  return (
    <div>
      <div className=' border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b] h-80 w-200 bg-[#FFDCC6] rounded-3xl hover:-translate-y-1 transition-transform duration-300'>
        <div className=' flex'>
          <LandingHomeLeftBottomLeftLeft/>
          <LandingHomeBottomLeftRight/>
        </div>
      </div>
    </div>
  )
}

export default LandingHomeLeftBottom