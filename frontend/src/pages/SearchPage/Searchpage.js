
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Filterbar from "../../components/SearchComponents/Filterbar";
import SearchResult from "../../components/SearchComponents/SearchResult";
import { Grid } from "@mui/material";
import { useState } from "react";

function Searchpage () {

    const [listings, setListings] = useState([]);

    return (
        <>
            <Navbar/>
            <div className="searchpage-container">
                <Grid container spacing={2}>
                    <Grid item lg={3.5}>
                    <Filterbar  setListings={setListings}/>
                    </Grid>

                    <Grid item lg={6.5}>
                        <SearchResult listings={listings} />
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </>
    )
}


export default Searchpage