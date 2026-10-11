import React from 'react'
import User from './components/User'
import Card from './components/Card'

const App = () => {
  const arr = [{ user: 'Sarthak' }, { user: 'Arrsh' }, { user: 'Aman' }]

  console.log(arr);

  return (
    <div className="parent">
      {arr.map(function (elem, idx) {
        return <User key={idx} username={elem.user} />
      })}
    </div>
  )
}

export default App