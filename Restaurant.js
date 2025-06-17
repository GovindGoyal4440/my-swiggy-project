import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";


export default function Restaurant(){

    const [RestData , setRestData] = useState([]);
    useEffect(()=>{
        
        async function fetchdata(){

            const proxyserver = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6677&lng=77.4337&is-seo-homepage-enabled=true"
            const response = await fetch(proxyserver + swiggyAPI);
            const data = await response.json();
            setRestData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        fetchdata();
    },[])

    if(RestData.length == 0){ 
        return <Shimmer></Shimmer>
    }

    return(
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                RestData.map((RestInfo)=>(<RestCard key={RestInfo.info.id} RestInfo = {RestInfo}></RestCard>))
            }
        </div>
    )
    
}
