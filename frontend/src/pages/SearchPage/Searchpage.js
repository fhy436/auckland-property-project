import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Filterbar from "../../components/SearchComponents/Filterbar";
import SearchResult from "../../components/SearchComponents/SearchResult";
import { Grid } from "@mui/material";

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
            <div className="searchpage-container">
                <Grid container spacing={2}>
                    <Grid item lg={3.5}>
                    <Filterbar
                        suburb={generateSuburbDataForDropdown()}
                        propertyType={generatePropertyTypeDataForDropdown()}
                        onSuburbFilter={handleFilterSuburb}
                        onBedroomsFilter={handleFilterBedrooms}
                        onBathroomsFilter={handleFilterBathrooms}
                        onPropertyTypeFilter={handleFilterPropertyType}
                    />
                    </Grid>

                    <Grid item lg={6.5}>
                        <SearchResult houses={allHouses}/>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </>
    )
}


export default Searchpage