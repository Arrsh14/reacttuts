import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'Customers who are happy with their current banking experience and likely to stay loyal.',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1773332598413-a6d5279d1ae8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'Customers whose needs are not fully met by existing banking products and services.',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1773332585754-f1436987743b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'Customers with limited or no access to formal banking and digital financial tools.',
      tag: 'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'Average ',
    }
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App