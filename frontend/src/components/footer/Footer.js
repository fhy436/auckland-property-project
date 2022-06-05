import React from "react";
import './Footer.css'
import Logo from '../../images/logosquare.png'
import { Icon } from '@iconify/react'

const Footer = () => {
    return (
        <>
        <div className="footer-container">
            <div className="footer-components">
                <div className="footer-row">
                    <div className="footer-col">
                        <img className='footer-logo' src={Logo} alt="logo" />
                    </div>
                    <div className="footer-col">
                        <ul>
                            <li className="footer-col-header">Body Corporate</li>
                            <li>Client Login</li>
                            <li>Request a Body Corp Proposal</li>
                            <li>Body Corporate Insurance</li>
                            <li>Pay Levies</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <li className="footer-col-header">Property Management</li>
                            <li>Owner Client Login</li>
                            <li>Why use a property manager</li>
                            <li>Fees and Commissions</li>
                            <li>Owner FAQs</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <li className="footer-col-header">Tenant Info Centre</li>
                            <li>Inspection Guide</li>
                            <li>Useful Resources</li>
                            <li>Our Services</li>
                            <li>Maintainance</li>
                            <li>Tenancy Handbook</li>
                            <li>Tenant FAQs</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <li className="footer-col-header">About</li>
                            <li>Why Choose APM?</li>
                            <li>Commercial Services</li>
                            <li>Rent & Arrears Collection</li>
                            <li>Lease Advisory</li>
                            <li>Complaints process</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-container">
                <div className="footer-bottom-components">
                    <div className="footer-bottom-row">
                        <div className="footer-bottom-col"><span className="footer-copyright">© 2022 Auckland Property Management. All Rights Reserved.</span></div>
                            <div className="footer-bottom-col">
                                Terms of Service             Privacy Policy             Security             Sitemap
                            </div>
                        <div className="social-media-links">
                            <Icon icon="akar-icons:facebook-fill" className="footer-icons"/>
                            <Icon icon="akar-icons:linkedin-box-fill" className="footer-icons"/>
                            <Icon icon="akar-icons:youtube-fill" className="footer-icons"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;