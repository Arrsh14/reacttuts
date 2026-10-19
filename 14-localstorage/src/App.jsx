import React from 'react'

const App = () => {

  /* localStorage.clear()
  sessionStorage.clear() */

  const getData=async() => {
    const response=await fetch('https://jsonplaceholder.typicode.com/posts/5')
    const data=await response.json();
    console.log(data);
  }

  {/*localStorage.setItem('user', 'arrsh')

  const user = localStorage.getItem('user')

  console.log(user) // arrsh*/}

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App  