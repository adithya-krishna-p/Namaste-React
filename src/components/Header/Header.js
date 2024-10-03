import React from 'react'
import '../Header/Header.css'
import {CON_URL} from '../Utils/Constants'
function Header() {
  return (
    <div className='header'>
      <div className='logo-container'>
      <img className='Logo' 
       src={CON_URL}></img>
      </div>
      <div className='nav-items'>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
      </div>
    </div>
  )
}

export default Header
