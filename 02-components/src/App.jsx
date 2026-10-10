import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

const App = () => {
  const user = 'acha ji'
  const age = '21'

  return (
    <div>
      <Navbar />
      <Navbar />
      <Card user={user} age={age} />
      <Card user={user} age={age} />
    </div>
  )
}

export default App