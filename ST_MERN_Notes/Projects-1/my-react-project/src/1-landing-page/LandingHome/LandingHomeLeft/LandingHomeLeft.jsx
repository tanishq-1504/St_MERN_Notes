import React from 'react'
import LandingHomeLeftTop from './LandingHomeLeftTop'
import LandingHomeLeftBottom from './LandingHomeLeftBottom/LandingHomeLeftBottom'

const LandingHomeLeft = () => {
  return (
    <div>
        <div className='w-full h-105'>
            <LandingHomeLeftTop/>
        </div>
        <div className=' w-full h-105 pt-7 pl-2'>
            <LandingHomeLeftBottom/>
        </div>
    </div>
  )
}

export default LandingHomeLeft