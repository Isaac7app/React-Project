import React from 'react';
import './search-box.styless.css';


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