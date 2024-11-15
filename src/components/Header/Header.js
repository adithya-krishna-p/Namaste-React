import React, { useState } from 'react'
import '../Header/Header.css'
import { CON_URL } from '../Utils/Constants'
import { Link } from 'react-router-dom';

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
          <li>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} style={{ textDecoration: "none", color: "black" }}>
              Aboutus
            </Link>
          </li>
          <li>
          <Link to={"/Contactus"} style={{ textDecoration: "none", color: "black" }}>
          Contact Us
            </Link>
          </li>
          <li><Link to={"/Cart"} style={{ textDecoration: "none", color: "black" }}>
          Cart
            </Link>
            </li>
          <button className="login"
            onClick={() => {
              btmNameReact === "Login" ?
                setbtmNameReact("Logout") : setbtmNameReact("Login")

            }}>
            {btmNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
