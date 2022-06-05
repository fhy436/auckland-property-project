import React from "react";
import './Navbar.css'
import Logo from '../../images/logo.png'
import { Icon } from '@iconify/react'


const Navbar = () => {

    //const [isactive, setIsactive] = useState(false);

    return (
        <>
        <div className="navbar-container">
            <div className="navbar-components">
                <div className="navbar-selection">
                    <img className='logo-img' src={Logo} alt="logo" />
                    <div className="navbar-headers">
                        <h3>Property Search</h3>
                        <h3>Property Management</h3>
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