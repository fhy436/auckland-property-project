import "./Filterbar.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";



const Filterbar = ({setListings}) => {
    
    const [suburbQuery, setSuburbQuery] = useState("Any");
    const [propertyTypeQuery, setPropertyTypeQuery] = useState("Any");
    const [bedroomsQuery, setBedroomsQuery] = useState("Any");
    const [bathroomsQuery, setBathroomsQuery] = useState("Any");

    let searchQuery = {
        suburb: suburbQuery,
        propertyType: propertyTypeQuery,
        bedrooms: bedroomsQuery,
        bathrooms: bathroomsQuery,

    };

    //retrieve data from database
    const getListings = async () => {
        try {
            const response = await axios.get("http://localhost:5000/houses");

            if (searchQuery.suburb !== "Any" && searchQuery.propertyType !== "Any" && searchQuery.bedrooms !== "Any" && searchQuery.bathrooms !== "Any") {
                setListings(response.data.filter(listing => listing.suburb === searchQuery.suburb && listing.propertyType === searchQuery.propertyType && listing.bedrooms === searchQuery.bedrooms && listing.bathrooms === searchQuery.bathrooms));

            }
            else if (searchQuery.suburb !== "Any" && searchQuery.propertyType !== "Any" && searchQuery.bedrooms !== "Any") {
                setListings(response.data.filter(listing => listing.suburb === searchQuery.suburb && listing.propertyType === searchQuery.propertyType && listing.bedrooms === searchQuery.bedrooms));
            }

            else if (searchQuery.suburb !== "Any" && searchQuery.propertyType !== "Any" && searchQuery.bathrooms !== "Any") {
                setListings(response.data.filter(listing => listing.suburb === searchQuery.suburb && listing.propertyType === searchQuery.propertyType && listing.bathrooms === searchQuery.bathrooms));
            }

            else if (searchQuery.suburb !== "Any" && searchQuery.bedrooms !== "Any" && searchQuery.bathrooms !== "Any") {
                setListings(response.data.filter(listing => listing.suburb === searchQuery.suburb && listing.bedrooms === searchQuery.bedrooms && listing.bathrooms === searchQuery.bathrooms));
            }

            else if (searchQuery.propertyType !== "Any" && searchQuery.bedrooms !== "Any" && searchQuery.bathrooms !== "Any") {
                setListings(response.data.filter(listing => listing.propertyType === searchQuery.propertyType && listing.bedrooms === searchQuery.bedrooms && listing.bathrooms === searchQuery.bathrooms));
            }

            else if (searchQuery.suburb !== "Any" && searchQuery.propertyType !== "Any") {
                setListings(response.data.filter(listing => listing.suburb === searchQuery.suburb && listing.propertyType === searchQuery.propertyType));
            }

            else if (searchQuery.suburb !== "Any" && searchQuery.bedrooms !== "Any") {
                setListings(response.data.filter(listing => listing.suburb === searchQuery.suburb && listing.bedrooms === searchQuery.bedrooms));
            }

            else if (searchQuery.suburb !== "Any" && searchQuery.bathrooms !== "Any") {
                setListings(response.data.filter(listing => listing.suburb === searchQuery.suburb && listing.bathrooms === searchQuery.bathrooms));
            }

            else if (searchQuery.propertyType !== "Any" && searchQuery.bedrooms !== "Any") {
                setListings(response.data.filter(listing => listing.propertyType === searchQuery.propertyType && listing.bedrooms === searchQuery.bedrooms));
            }

            else if (searchQuery.propertyType !== "Any" && searchQuery.bathrooms !== "Any") {
                setListings(response.data.filter(listing => listing.propertyType === searchQuery.propertyType && listing.bathrooms === searchQuery.bathrooms));
            }

            else if (searchQuery.bedrooms !== "Any" && searchQuery.bathrooms !== "Any") {
                setListings(response.data.filter(listing => listing.bedrooms === searchQuery.bedrooms && listing.bathrooms === searchQuery.bathrooms));
            }

            else if (searchQuery.suburb !== "Any") {
                setListings(response.data.filter(listing => listing.suburb === searchQuery.suburb));
            }

            else if (searchQuery.propertyType !== "Any") {
                setListings(response.data.filter(listing => listing.propertyType === searchQuery.propertyType));
            }
            
            else if (searchQuery.bedrooms !== "Any") {
                setListings(response.data.filter(listing => listing.bedrooms === searchQuery.bedrooms));
            }

            else if (searchQuery.bathrooms !== "Any") {
                setListings(response.data.filter(listing => listing.bathrooms === searchQuery.bathrooms));
            }

            else {
                setListings(response.data);
            }



        }
        catch (error) {
            console.log(error);
        }

    }

    //update the search query based on user selection
    const handleSuburbChange = (event) => {
        setSuburbQuery(event.target.value);
    }

    const handlePropertyTypeChange = (event) => {
        setPropertyTypeQuery(event.target.value);
    }

    const handleBedroomsChange = (event) => {
        setBedroomsQuery(event.target.value);
    }

    const handleBathroomsChange = (event) => {
        setBathroomsQuery(event.target.value);
    }

    const handleClear = (event) => {
        setSuburbQuery("Any");
        setPropertyTypeQuery("Any");
        setBedroomsQuery("Any");
        setBathroomsQuery("Any");
        }
    

    return (
        <>
        <div className="filterbar-container">
                <header className="filterbar-header">Filters<br/></header>

                {/* ----------Filter by suburb----------*/}
                <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Suburb</InputLabel>
                        <Select 
                            id="filterbar-suburb" 
                            label="Suburb"
                            value={suburbQuery}
                            onChange={handleSuburbChange}
                            >
                            <MenuItem value={"Any"}>Any</MenuItem>
                            <MenuItem value={"City Centre"}>City Centre</MenuItem>
                            <MenuItem value={"Epsom"}>Epsom</MenuItem>
                            <MenuItem value={"Newmarket"}>Newmarket</MenuItem>
                            <MenuItem value={"Mount Eden"}>Mount Eden</MenuItem>
                            <MenuItem value={"Parnell"}>Parnell</MenuItem>
                            <MenuItem value={"Remuera"}>Remuera</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                </div>

                {/* ----------Filter by property type----------*/}
                <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
                        <Select 
                            id="filterbar-propertyType" 
                            label="Property Type"
                            value={propertyTypeQuery}
                            onChange={handlePropertyTypeChange}
                            >
                            <MenuItem value={"Any"}>Any</MenuItem>
                            <MenuItem value={"Apartment"}>Apartment</MenuItem>
                            <MenuItem value={"House"}>House</MenuItem>
                            
                        </Select>
                    </FormControl>
                </Box>
                </div>

                {/* ----------Filter by bedrooms----------*/}
                <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Bedrooms</InputLabel>
                        <Select
                            id="filterbar-bedrooms"
                            label="Bedrooms"
                            value={bedroomsQuery}
                            onChange={handleBedroomsChange}
                            >
                            <MenuItem value={"Any"}>Any</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                </div>

                

                <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Bathrooms</InputLabel>
                        <Select
                            id="filterbar-bathrooms"
                            label="Bathrooms"
                            value={bathroomsQuery}
                            onChange={handleBathroomsChange}
                            >
                            <MenuItem value={"Any"}>Any</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                </div>

                <div>
                {/* ----------Filter listings----------*/}
                <button type="button" className="search-button" onClick={getListings}>SEARCH</button>
                </div>
                <div>
                <button type="button" className="clear-filters-button" onClick={handleClear}>Clear Filters</button>
                </div>     

        </div>
        </>
    )
};

export default Filterbar;
        