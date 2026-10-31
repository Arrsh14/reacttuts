import React from 'react'
import Navbar from './components/Navbar'
import {useState} from 'react'

const App = () => {

  const [theme,setTheme] = useState('light')
  return (
    <div>
       <Navbar theme={theme}>
        <h2>This is Navbar</h2>
        <h2>My name is Arrsh</h2>
       </Navbar>
    </div>
  )
}

export default App