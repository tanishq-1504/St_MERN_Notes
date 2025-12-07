import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props)
  return (
    <div className='h-full flex flex-nowrap gap-10 p-6 w-2/3'>
      {props.users.map(function(elem ,idx){
        return<RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent