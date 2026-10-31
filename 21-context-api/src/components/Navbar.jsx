import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { PostDataContext } from '../context/ThemeContext'

const Navbar = (props) => {
  const data = useContext(PostDataContext)

  

  return (
    <div className='nav'>
      <h2>Arrsh</h2>
      <h2>{data}</h2> 
      {props.children[0]}
      {props.children[1]}
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar