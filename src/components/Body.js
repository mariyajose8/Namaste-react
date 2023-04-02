import RestroCard from "./RestroCard";
import REST_OBJ from "../utils/mockData";
import { useState } from "react";
const Body = () => {

 const [listOfRestro,setListOfRestro] = useState(REST_OBJ);

    return (
        <div className="body"> 
            <button className="filter-btn" 
            onClick = { () => {
            const filteredListOfRestro = listOfRestro.filter(res => res.data.avgRating > 4);
            setListOfRestro(filteredListOfRestro);
            } }
            >
                Top Rated Restaurants</button>
            <div className="restContainer">
                { listOfRestro.map(restaurant => <RestroCard  key= {restaurant.data.key} resData = {restaurant}/>) } 
            </div>
        </div>
    )
}

export default Body;
