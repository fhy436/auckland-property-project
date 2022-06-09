import "./Filterbar.css";
import { useState } from "react";

const Filterbar = ({ suburb, propertyType, onSuburbFilter, onBedroomFilter, onBathroomsFilter, onPropertyTypeFilter}) => {
    const [filters, setFilters] = useState({
        suburb: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        propertyType: "",
        allowsPets: "",
    });

    const handleInput = (field) => (event) => {
        const {value} = event.target

        setFilters({
            ...filters,
            [field]: value,
        });

        switch (field) {
            case "suburb":
                onSuburbFilter(value);
                break;
            case "price":
                break;
            case "bedrooms":
                onBedroomFilter(value);
                break;
            case "bathrooms":
                onBathroomsFilter(value);
                break;
            case "propertyType":
                onPropertyTypeFilter(value);
                break;
            case "allowsPets":
                break;
            default:
                break;
        }
    }
       
    return (
        <>
        <div className="filterbar-container">
            <div className="filterbar-components">
                <div className="filterbar-row">
                    <header className="filterbar-header">Filters<br/></header>
                </div>
                <div className="filterbar-row">
                    <label className="filterbar-label" htmlFor="filterbar-suburb">Suburb<br/></label>
                    <select 
                        className="filterbar-dropdown" 
                        id="filterbar-suburb" 
                        onChange={handleInput("suburb")}
                    >
                        <option value="">Select</option>
                        {suburb.map(suburb => (
                            <option key={suburb} value={suburb}>{suburb}</option>
                        ))}
                    </select>
                </div>
                <div className="filterbar-row">
                    <label className="filterbar-label" htmlFor="weekly-rent">Rent per week<br/></label>
                    <select className="filterbar-dropdown" id="weekly-rent">
                        <option value="">Any</option>
                        <option value="">Under select</option>
                    </select>
                </div>
                <div className="filterbar-row">
                    <label className="filterbar-label" htmlFor="numberOfBedrooms">Bedrooms<br/></label>
                    <select 
                    className="filterbar-dropdown" 
                    id="numberOfBedrooms"
                    onChange={handleInput("bedrooms")}  
                    >
                        <option value="">Any</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">5+</option>
                    </select>
                </div>
                <div className="filterbar-row">
                    <label className="filterbar-label" htmlFor="numberOfBathrooms">Bathrooms<br/></label>
                    <select 
                    className="filterbar-dropdown" 
                    id="numberOfBathrooms"
                    onChange={handleInput("bathrooms")}
                    >
                        <option value="">Any</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">5+</option>
                    </select>
                </div>
                <div className="filterbar-row">
                    <label className="filterbar-label" htmlFor="propertyType">Property Type<br/></label>
                    <select 
                    className="filterbar-dropdown" 
                    id="propertyType"
                    onChange={handleInput("propertyType")}
                    >
                        <option value="">Any</option>
                        {propertyType.map(propertyType => (
                            <option key={propertyType} value={propertyType}>{propertyType}</option>
                        ))}
                    </select>
                    <br/>
                </div>
                {/*<div className="filterbar-row">
                    <label htmlFor="allowsPets">
                        Pets Allowed
                        <input type="checkbox" id="allowsPets" onChange={handleInput("allowsPets")}/>
                    </label>
                    </div> */}                
            </div>
        </div>
        </>
    )
}

export default Filterbar
        