import { useState } from "react";
import { useParams } from "react-router"
import { useEffect } from "react";
import RestInfo from "./RestInfo";



export default function SearchFood(){
    const {id} = useParams();
    const [food,setFood] = useState("");
    // const [RestData , setRestData] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);


    useEffect(()=>{
                
                async function fetchdata(){
        
                    const proxyserver = "https://cors-anywhere.herokuapp.com/"
                    const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6677&lng=77.4337&restaurantId=${id}`
                    const response = await fetch(proxyserver + swiggyAPI);
                    const data = await response.json();
                    const tempdata = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

                    const allFoodItemsWithDuplicates = tempdata.filter(cat => cat?.card?.card?.itemCards).flatMap(cat => cat.card.card.itemCards);


                    //remove duplicate items
                    const uniqueItemsMap = new Map();
                    allFoodItemsWithDuplicates.forEach(item => {uniqueItemsMap.set(item?.card?.info?.id, item);});
                    const uniqueItemsArray = Array.from(uniqueItemsMap.values());
                    setAllItems(uniqueItemsArray);
                }
            fetchdata();},[id])

    useEffect(() => {
        // Agar search box khaali hai, to results bhi khaali kar do
        if (food === "") {
            setFilteredResults([]);
            return; // Function se bahar nikal jao
        }

        // Ab allItems par filter lagao
        console.log(`Filtering for: "${food}"`);
        const results = allItems.filter(item =>
            // Item ke naam ko lowercase karo aur check karo ki usmein search query (lowercase mein) hai ya nahi
            item?.card?.info?.name.toLowerCase().includes(food.toLowerCase())
        );

        // Filtered results ko state mein set kar do
        setFilteredResults(results);
        // console.log("Found results:", results);

    }, [food, allItems]); // Iski dependency 'food' aur 'allItems' hai.


    
    return (
    <div className="w-[80%] mx-auto mt-20">
        <input
        className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl"
        placeholder="Search for dishes..."
        value={food}
        onChange={(e) => setFood(e.target.value)}
        />
        <div className="mt-10">
        {filteredResults.length > 0 ? (
          // Agar results hain, to unhe dikhao
            filteredResults.map((item) => (
            <RestInfo key={item?.card?.info?.id} restData={item?.card?.info}></RestInfo>
        ))
        ) : (
            food.length > 0 && <p className="text-center text-gray-500 text-xl">No dishes found matching "{food}"</p>
        )}
        </div>
    </div>
    );
}