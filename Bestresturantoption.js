import { dineoutRestaurants } from "./bestresturants";
import DineoutRestaurantscards from "./DineoutRestaurantscards";

export default function Bestresturantoption(){

    return(
        <>
        <div className="w-[80%] mx-auto mt-20">
            <p className="font-bold">Discover best restaurants on Dineout   </p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 mb-30">
                {
                    dineoutRestaurants.map((RestData)=><DineoutRestaurantscards key={RestData.info.id} RestData={RestData}></DineoutRestaurantscards>)
                }
            </div>
        </div>
        </>
    )
}