import "./SearchResult.css";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import HouseCards from "./HouseCards";

const SearchResult = ({houses}) => {
   return (
           <div className="search-result-container">
                    {houses.map((houses) => {
                        return (
                            <HouseCards houses={houses} key={houses.__id}/>
                        )
                    })
                }
                    
            </div>
    )
}


export default SearchResult;