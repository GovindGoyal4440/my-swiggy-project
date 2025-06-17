import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import MenuCard from "./MenuCard";
import { Link } from "react-router";

export default function ResturantMenu(){

    let {id} = useParams();
    console.log(id);

    const [RestData , setRestData] = useState([]);
    const [selected,setselected] = useState(null);


    // if(selected === 'VEG'){
    //   return(
    //   <h1>Veg selected</h1>
    //   )
    // }

    // if(selected === 'NON VEG'){
    //   return(
    //     <h1>Non Veg selected</h1>
    //   )
    // }

        useEffect(()=>{
            
            async function fetchdata(){
    
                const proxyserver = "https://cors-anywhere.herokuapp.com/"
                const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6677&lng=77.4337&restaurantId=${id}`
                const response = await fetch(proxyserver + swiggyAPI);
                const data = await response.json();
                const tempdata = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

                const filterdata = tempdata?.filter((items)=>'title' in items?.card?.card)
                setRestData(filterdata);
            }
    
            fetchdata();
        },[])


    return(


        <div>

            <div className="w-[80%] mx-auto mt-20 mb-20 " >
                <Link to={`/city/noida/${id}/search`}>
                <p className="w-full text-center py-4 bg-gray-200 text-2xl rounded-4xl">Search for Dishes</p>
                </Link>
            </div>

        <div className="w-[80%] mx-auto mt-20 mb-20 flex gap-3">
            <button className={`text-2xl py-2 px-4 border rounded-2xl ${selected == "VEG" ? "bg-green-600": "bg-gray-300"} `} onClick={()=>setselected(selected==='VEG'?null:'VEG')}>VEG</button>
            <button className={`text-2xl py-2 px-4 border rounded-2xl ${selected == "NON VEG" ? "bg-red-400": "bg-gray-300"} `}onClick={()=>setselected(selected==='NON VEG'?null:'NON VEG')}>NON VEG</button>
        </div>

        <div className="w-[80%] mx-auto mt-20">
            {
                RestData?.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems = {menuItems?.card?.card} foodselected={selected}></MenuCard>)
            }

        </div>
        </div>
    )
}

