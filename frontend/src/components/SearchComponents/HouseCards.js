 import "./HouseCards.css";
 import { Icon } from "@iconify/react";
 import { NavLink } from "react-router-dom";

 const HouseCards = ({image, name, price, address, bedrooms, bathrooms }) => {
    return (   
        <div className="house-cards">
            <img className="house-cards-image" src={image} alt="house" />
            <NavLink className="Navlink" to="/Propertydetails"><header className="house-cards-header">{name}</header></NavLink>
            <div className="house-cards-text">
                <span className="house-price">${price}/week<br/></span>
                {address} <br/>
                <Icon icon="cil:bathroom" className="house-card-icon" />{" "}{bedrooms} {'             '}
                <Icon icon="bx:bed" className="house-card-icon" />{"  "}{bathrooms}
            </div>
        </div>
        )
    }

export default HouseCards;