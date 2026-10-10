import React from 'react'

const Card = ({ user, age }) => {
  return (
    <div className='card'>
      <h1>Arrsh Tripathi {user}.</h1>
      <h2>and I am {age} years old.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, molestias.</p>
    </div>
  )
}

export default Card