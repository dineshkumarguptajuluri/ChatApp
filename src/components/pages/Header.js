import React from 'react'
import '../Styles/Header.css'
import logo from '../img/logo.png'
const Header = () => {
  return (
    <div className="header">
        <img className='logo' src={logo} alt="" />
    </div>
  )
}

export default Header