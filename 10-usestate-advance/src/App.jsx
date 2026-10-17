import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10)

  const btnClicked = () =>{
    {/*const newNum={...num};
    newNum.user='Rakesh'
    newNum.age=30
    setnum(newNum)}*/}
    {/*setnum(prev =>(prev+1))
    setnum(prev =>(prev+1))
    setnum(prev =>(prev+1))*/}
    
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App