 import "./HouseCards.css";
 import { Icon } from "@iconify/react";

 const HouseCards = ({houses}) => {
    return (
            <div className="house-cards-row">
                <img className="house-cards-image" src={houses.image} alt="house" />
                <header className="house-cards-header">{houses.name}</header>
                <div className="house-cards-text">
                    ${houses.price}/week<br/>
                    {houses.address} <br/>
                    <Icon icon="cil:bathroom" className="house-card-icon" />{houses.bedrooms}
                    <Icon icon="bx:bed" className="house-card-icon" /> {houses.bathrooms}
                </div>
            </div>
        )
    }

export default HouseCards;