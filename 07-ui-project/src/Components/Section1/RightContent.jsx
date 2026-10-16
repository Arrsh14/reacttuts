import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full w-2/3 p-5 flex flex-nowrap gap-10 overflow-x-auto'>
      {props.users.map((elem, idx) => (
        <RightCard
          key={idx}
          id={idx + 1}
          img={elem.img}
          intro={elem.intro}
          tag={elem.tag}
        />
      ))}
    </div>
  )
}

export default RightContent