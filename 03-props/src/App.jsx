import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={18} img='https://images.unsplash.com/photo-1791468847462-629ce6f02c84?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      <Card user='Arrsh' age={21} img='https://images.unsplash.com/photo-1791395387459-3e864ec5f344?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D'/>
      <Card user='Tikka' age={29} img='https://images.unsplash.com/photo-1787612498788-69a4559a1437?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
    </div>
  )
}

export default App