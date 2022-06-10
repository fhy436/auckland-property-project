import "./SearchResult.css";
import HouseCards from "./HouseCards";

const SearchResult = ({listings}) => {
   return (
       <>
        <header className="search-result-header">Properties for rent</header>
           <div className="search-result-container">
                    {listings.map((listings) => {
                        return (
                            <HouseCards 
                            image={listings.image}
                            name={listings.name}
                            price={listings.price}
                            address={listings.address}
                            bedrooms={listings.bedrooms}
                            bathrooms={listings.bathrooms}
                            />
                        )
                    })
                }
                    
            </div>
        </>
    )
}


export default SearchResult;