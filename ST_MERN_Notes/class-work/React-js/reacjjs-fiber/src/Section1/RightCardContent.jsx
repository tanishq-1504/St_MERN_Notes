import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-12 w-12 text-2xl font-semibold flex justify-center items-center '>{props.id+1}</h2>
            <div>
                <p className='text-xl leading-relaxed pb-5 mb-14 text-white '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum sapiente voluptatibus laborum autem modi fugit facere, suscipit repellendus nulla quo.</p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-600 rounded-full px-8 py-3 text-white font-medium'>{props.tag}</button>
                        <button className='bg-blue-600 rounded-full px-4 py-2 text-white font-semibold'><i className="ri-arrow-right-line"></i></button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent