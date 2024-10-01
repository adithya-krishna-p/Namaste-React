import React from 'react'
import '../Header/Header.css'
function Header() {
  return (
    <div className='header'>
      <div className='logo-container'>
      <img className='Logo' 
       src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
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
