import React from 'react'

const SearchBox = ({placeholder , handledChange}) => {
  return (
    <input
     type='search' 
     placeholder={placeholder}
     onChange={handledChange}
     />
  
  )
}

export default SearchBox