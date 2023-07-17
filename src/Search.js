import React from 'react'
import { GlobalContext } from './context'

const Search = () => {

  const {searchPost,query}=GlobalContext()
  
  return (
    <>
     <div>
      <h1>Tea with Tech</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text"
         placeholder='Search here'
         value={query}
         onChange={(e)=>searchPost(e.target.value)}
        />
      </form>
     </div>
      
    </>
  )
}

export default Search