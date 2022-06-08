import React from "react";
import './Navbar.css'
import Logo from '../../images/logo.png'
import { Icon } from '@iconify/react'
import { NavLink } from "react-router-dom";


const Navbar = () => {

    return (
        <>
        <div className="navbar-container">
            <div className="navbar-components">
                <div className="navbar-selection">
                    <NavLink to='/'><img className='nav-logo' src={Logo} alt="logo" /></NavLink>
                    <div className="navbar-headers">
                    <NavLink to="/Propertydetails"><h3>Property Search</h3></NavLink>
                    <NavLink to="/Searchpage"><h3>Property Management</h3></NavLink>
                        <h3>Body Corporate</h3>
                        <h3>Commercial</h3>
                        <h3>FAQs and Contact</h3>
                    </div>
                    <form action="" className="navbar-search-container">
                        <input className = "navbar-search-input" type="text" placeholder="Search" />
                        <Icon icon="bytesize:search" className="navbar-search-icon" />
                    </form>
                    <div className="navbar-buttons">
                        <button className="navbar-login">Login</button>
                        <button className="navbar-signup">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar