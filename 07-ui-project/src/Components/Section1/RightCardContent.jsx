import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between bg-gradient-to-t from-black/60 via-black/10 to-transparent">
      <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>
        {props.id}
      </h2>

      <div>
        <p className='text-base leading-relaxed text-white mb-14'>
          {props.intro}
        </p>
        <div className='flex justify-between items-center'>
          <button className='bg-blue-600 text-white font-medium px-6 py-2 rounded-full'>
            {props.tag}
          </button>
          <button className='bg-blue-600 text-white h-10 w-10 flex items-center justify-center rounded-full'>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent