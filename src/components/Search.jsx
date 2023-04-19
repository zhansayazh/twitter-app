import React from 'react'
import '../App.css'
import searchIcon from '../assets/search-icon.png'

export default function Search({searchValue, handleSearch}) {
  return (
    <div className="Search">
      <div className="input-search">
        <img src={searchIcon}/>
        <input type='text' value={searchValue} onChange={handleSearch} className="input-of-search" placeholder='Search Twitter' />
      </div>
    </div>
  )
}
