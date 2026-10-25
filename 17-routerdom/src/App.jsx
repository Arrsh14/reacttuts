import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

//A router in React is a library that lets your app show different pages 
//(views)based on the URL,without reloading the whole page. 
//React itself has no built-in routing, 
//so most projects use React Router (the react-router-dom package).
//This is how single-page applications (SPAs) work: 
//the browser loads one HTML page once, and 
//the router swaps which component is displayed as the URL changes.

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App