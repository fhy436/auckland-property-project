 import "./HouseCards.css";

 const HouseCards = ({houses}) => {
    return (
        <div className="house-cards-container">
            <div className="house-cards-components">
                <img className="house-cards-image" src={houses.image} alt="house" />
                <header className="house-cards-header">{houses.name}</header>
                <div className="house-cards-text">
                    {houses.address}
                    {houses.bathrooms} bathrooms
                    {houses.bedrooms} bedrooms

                </div>
            </div>
        </div>
        )
    }

export default HouseCards;