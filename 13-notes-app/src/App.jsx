import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask=[...task];
    copyTask.push({title,details})

    setTask(copyTask)
    console.log(task);
    
    
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'
      >
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* Heading input */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* Details input */}
        <textarea
          className='px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded'
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'>
          Add Note
        </button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 gap-5 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className="relative h-52 w-40 rounded-2xl bg-cover text-black py-8 px-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebdTxbYBr8Y62BPsd-eoJdRXgYekJzlD_7fQJy_SfKRcnxxey83zYWbQ&s=10')]">
              <h2
                onClick={() => {
                  deleteNote(idx)
                }}
                className='absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xs cursor-pointer'
              ><X size={16} color="#ffffff" strokeWidth={2.75}/></h2>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-700'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App