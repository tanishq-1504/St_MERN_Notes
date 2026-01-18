import React from 'react'
import { Link } from 'react-router'

const LandingHomeRightBottomRight = () => {
  return (
    <div className="h-80 w-1/2 font-medium ">
      <div className="text-3xl pb-4 pt-15">
      <h1>Free live support</h1>
      </div>
      <div className="text-xl pb-4 ">
      <p>We're always here whenever you need</p>
      <p>us,our free live support will answer all</p>
      <p>your questions immediatly.</p>
      </div>
      <div>
        <Link className="underline font-semibold hover:-translate-y-1 transition-transform duration-300">Compare plans</Link>
      </div>
    </div>
  )
}

export default LandingHomeRightBottomRight