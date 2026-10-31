import React from 'react'
import { createContext } from 'react'

export const PostDataContext=createContext()

const ThemeContext = (props) => {
  return (
    <div>
        <PostDataContext.Provider value={[1,2,3,4]}>
            {props.children}
        </PostDataContext.Provider>
    </div>
  )
}

export default ThemeContext