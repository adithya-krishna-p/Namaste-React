import React, { useState } from 'react'
import '../Header/Header.css'
import {CON_URL} from '../Utils/Constants'
function Header() {
  const [btmNameReact, setbtmNameReact] = useState("Login");
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
        <button className="login"
        onClick={()=> {
          btmNameReact === "Login" 
          ? setbtmNameReact("Login")
          : setbtmNameReact("Logout")
        }}>
         {btmNameReact}
        </button>
      </ul>
      </div>
    </div>
  )
}

export default Header
