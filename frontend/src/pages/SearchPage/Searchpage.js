import { useState } from "react";
import HouseCards from "../../components/SearchComponents/HouseCards";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Filterbar from "../../components/SearchComponents/Filterbar";

function Searchpage ({houses}) {
    const [allHouses, setHouses] = useState(houses);

    //automatically generates the list of suburbs for the dropdown
    const generateSuburbDataForDropdown = () => {
        return[...new Set(houses.map((houses) => houses.suburb))];
    };

    const generatePropertyTypeDataForDropdown = () => {
        return[...new Set(houses.map((houses) => houses.propertyType))];
    };

    const handleFilterSuburb = (suburb) => {
        const filteredHouses = houses.filter((houses) => {
            if (houses.suburb === suburb) {
                return houses;
            }      
        });

    setHouses(filteredHouses);
    }

    const handleFilterBedrooms = (bedrooms) => {
        const filteredHouses = houses.filter((houses) => {
            if (houses.bedrooms === bedrooms) {
                return houses;
            }      
        });
        
    setHouses(filteredHouses);
    }

    const handleFilterBathrooms = (bathrooms) => {
        const filteredHouses = houses.filter((houses) => {
            if (houses.bathrooms === bathrooms) {
                return houses;
            }      
        });
        
    setHouses(filteredHouses);
    }

    const handleFilterPropertyType = (propertyType) => {
        const filteredHouses = houses.filter((houses) => {
            if (houses.propertyType === propertyType) {
                return houses;
            }      
        });
        
    setHouses(filteredHouses);
    }

    return (
        <>
        <Navbar/>
        <div className="search-page-container">
            <Filterbar 
                suburb={generateSuburbDataForDropdown()}
                propertyType={generatePropertyTypeDataForDropdown()}
                onSuburbFilter={handleFilterSuburb}
                onBedroomsFilter={handleFilterBedrooms}
                onBathroomsFilter={handleFilterBathrooms}
                onPropertyTypeFilter={handleFilterPropertyType}
            />
            <div className="house-cards-container">
            {allHouses.map((houses) => (
            <HouseCards houses={houses} key={houses.__id} />
            ))} 
            </div>

        </div>
        <Footer/>
        </>
    )
}


export default Searchpage