import React from 'react'
import { IoIosAppstore, IoIosNotifications } from 'react-icons/io'
import './navbar.css'
import { BiLogoPlayStore } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarLogo">
            <h1 className='navbarLogoText'>Shopify</h1>
        </div>
        <div className="navbarLinks">
            <p className='navbarLink'><a href='#'>Home</a></p>
            <p className='navbarLink'><a href='#'>Products</a></p>
            <p className='navbarLink'><a href='#'>About Us</a></p>
            <p className='navbarLink'><a href='#'>Contact</a></p>
        </div>
        <div className="navbarIcons">
            <div className='navbarIcon'>
                <IoIosNotifications size={25} />
            </div>
            <div className='navbarIcon'>
                <IoIosAppstore size={25} />
            </div>
            <div className='navbarIcon'>
                <BiLogoPlayStore size={25} />
            </div>
        </div>
    </div>
  )
}

export default Navbar
