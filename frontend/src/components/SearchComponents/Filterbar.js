import "./Filterbar.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
                <header className="filterbar-header">Filters<br/></header>

                {/* ----------Filter by suburb----------*/}
                <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Suburb</InputLabel>
                        <Select 
                            id="filterbar-suburb" 
                            value={filters.suburb}
                            onChange={handleInput("suburb")}
                            label="Suburb"
                            >
                            {suburb.map(suburb => (
                                <MenuItem key={suburb} value={suburb}>{suburb}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                </div>

                {/* ----------Filter by price----------*/}
                <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Rent per week</InputLabel>
                        <Select 
                                id="filterbar-price" 
                                value=""
                                label="Rent per week"
                            >
                                <MenuItem value="Select">Select</MenuItem>
                                <MenuItem value="$300">$300</MenuItem>
                                <MenuItem value="$400">$400</MenuItem>
                                <MenuItem value="$500">$500</MenuItem>
                                <MenuItem value="$600">$600</MenuItem>
                                <MenuItem value="$700">$700</MenuItem>
                                <MenuItem value="$800">$800</MenuItem>
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
                                value={filters.bedrooms}
                                label="Bedrooms"
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="4">4</MenuItem>
                                <MenuItem value="5">5</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                </div>

                {/* ----------Filter by bathrooms----------*/}
                <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Bathrooms</InputLabel>
                        <Select 
                                id="filterbar-bathrooms" 
                                value={filters.bathrooms}
                                label="Bathrooms"
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="4">4</MenuItem>
                                <MenuItem value="5">5</MenuItem>
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
                            value={filters.propertyType}
                            label="Property Type"
                            onChange={handleInput("propertyType")}
                            >
                            <MenuItem value="">Any</MenuItem>
                            {propertyType.map(propertyType => (
                                <MenuItem key={propertyType} value={propertyType}>{propertyType}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                </div>     

        </div>
        </>
    )
}

export default Filterbar
        