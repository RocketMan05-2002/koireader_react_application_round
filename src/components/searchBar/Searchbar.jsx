import React from 'react'
import './searchbar.css'
import { IoIosSearch } from "react-icons/io";


const Searchbar = ({setSearchQuery}) => {

  const handleChange = (e) =>{
    setSearchQuery(e.target.value);
  }

  return (
    <div className='searchbar'>
      <IoIosSearch size={20} />
      <input 
      type='text'
      placeholder='Search Products'
      className='searchbarInput'
      onChange={handleChange}
      />
    </div>
  )
}

export default Searchbar
