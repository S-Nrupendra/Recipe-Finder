import React from 'react'
import './styles/SearchBar.css'

const SearchBar = () => {
  return (
    <form action="" className='search-bar'>
      <input className='input' type="text" placeholder='Search for a Recipe..'/>
      <button className='btn1' type='button'>Search</button>
    </form>
  )
};

export default SearchBar
