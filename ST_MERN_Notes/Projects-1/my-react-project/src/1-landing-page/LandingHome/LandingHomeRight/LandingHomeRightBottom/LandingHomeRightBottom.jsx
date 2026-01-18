import React from 'react'
import LandingHomeBottomRightLeft from './LandingHomeBottomRightLeft'
import LandingHomeRightBottomRight from './LandingHomeRightBottomRight'

const LandingHomeRightBottom = () => {
  return (
    <div>
      <div className=' border-2 border-gray-900 shadow-[6px_6px_0px_#1e293b] h-80 w-200 bg-[#FFF200] rounded-3xl hover:-translate-y-1 transition-transform duration-300'>
        <div className='flex'>
          <LandingHomeBottomRightLeft/>
          <LandingHomeRightBottomRight/>
        </div>
      </div>
    </div>
  )
}

export default LandingHomeRightBottom