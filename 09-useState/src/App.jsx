import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num,setnum,] = useState(2)

  function increaseNum(){
    setnum(num+1);
  }

  function decreaseNum(){
    setnum(num-1);
  }

  function jump5Num(){
    setnum(num+5);
  }

  {/*const [num, setnum] = useState(25)
  const [name, setname] = useState('arrsh')
  const [users, setusers] = useState([10,20,30])*/}

  {/*function changeNum(){
    setnum(30)
    setname('rahul')
    setusers([30,40,50])
  }*/}
  
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Jump by 5</button>
      {/*<h1>Value of num is {num}</h1>
      <h2>Name of the user is {name}</h2>
      <h3>Array become {users}</h3>*/}
      {/*<button onClick={changeNum}>Click here</button>*/}
    </div>
  )
}

export default App