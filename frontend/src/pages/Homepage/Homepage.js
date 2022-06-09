import React from "react";
import './Homepage.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ApplicationSteps from '../../images/applicationsteps.png'
import HolidayAccommodation from '../../images/holidayaccommodation.png'
import PropertyManagement from '../../images/propertymanagement.png'
import Awards from '../../images/awards.png'
import ClientFeedback from "../../images/clientfeedback.png"
import { NavLink } from "react-router-dom";

const Homepage = () => {

    return(
        <>
        <Navbar/>
        <div className="homepage-container">
            <div className="homepage-top-background">
                <div className="homepage-top-text">
                <header className="homepage-header-top">Search for our rental properties.</header>
                <header className="homepage-header-top2">It's easy! </header>
                <div className="red-line"></div>
                <NavLink className="Navlink" to="/Searchpage"><div className="homepage-button">Find a home</div></NavLink>
                </div>
            </div>
            <div className="homepage-components">
            <header className="homepage-header">How to apply</header>
            <img className="homepage-application-steps" src={ApplicationSteps} alt="application steps" />
            <header className="homepage-header">Other services we offer:</header>
            <div className="homepage-other-services-container">
                <img className="homepage-property-management" src={PropertyManagement} alt="property management" />
                <img className="homepage-holiday-accommodation" src={HolidayAccommodation} alt="holiday accommodation" />
            </div>
            <header className="homepage-header">Our Awards</header>
            <div className="homepage-our-awards-text"> We have been awarded multiple times, from leading property managers of New Zealand</div>
            <img className="homepage-awards" src={Awards} alt="awards" />
            <div className="homepage-client-feedback-container">
                <header className="homepage-header-client">What our clients say</header>
                <img className="homepage-client-feedback" src={ClientFeedback} alt="client feedback" />
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Homepage;