import React from 'react'
import ProfileList from './ProfileList'

const SelectionBar = (props) => {
  return (
    <div>
        <div>
        <h1 className='text-4xl font-bold pt-3 pl-6'>New</h1>
        </div>
        <div className='flex items-end justify-end'>
            <h1 className='font-bold'>Sort by:</h1>
            <button className='pl-5 hover:text-gray-800 text-black hover:-translate-y-1 transition-transform duration-300'>newest</button>
            <button className='pl-5 hover:text-gray-800 text-black hover:-translate-y-1 transition-transform duration-300'>cheapest</button>
            <button className='pl-5 pr-15 hover:text-gray-800 text-black hover:-translate-y-1 transition-transform duration-300'>hottest</button>
        </div>
        <div className='p-10'>
        <ProfileList users = {props.users} />
        </div>
    </div>
  )
}

export default SelectionBar