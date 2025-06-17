
import { GrocerGridCard } from "./utils/grociries"
import GloceryCard from "./GloceryCard"

export default function GloceryOption(){

    return(
        <div className="mt-20 w-[80%] container mx-auto ">
            <h1 className="text-2xl font-bold">Shop Groceries on instamart</h1> 
        <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-5">
            {
                GrocerGridCard.map((foodData)=><GloceryCard key={foodData.id} foodData={foodData}></GloceryCard>)
            }
        </div>
        </div>
        
    )

}