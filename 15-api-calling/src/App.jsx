import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      {data.map((elem) => {
        return <h3 key={elem.id}>Hello</h3>
      })}
    </div>
  )
}

export default App