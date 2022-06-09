 import "./HouseCards.css";
 import { Icon } from "@iconify/react";
 import { NavLink } from "react-router-dom";

 const HouseCards = ({houses}) => {
    return (   
        <div className="house-cards">
            <img className="house-cards-image" src={houses.image} alt="house" />
            <NavLink className="Navlink" to="/Propertydetails"><header className="house-cards-header">{houses.name}</header></NavLink>
            <div className="house-cards-text">
                <span className="house-price">${houses.price}/week<br/></span>
                {houses.address} <br/>
                <Icon icon="cil:bathroom" className="house-card-icon" />{" "}{houses.bedrooms} {'             '}
                <Icon icon="bx:bed" className="house-card-icon" />{"  "}{houses.bathrooms}
            </div>
        </div>
        )
    }

export default HouseCards;