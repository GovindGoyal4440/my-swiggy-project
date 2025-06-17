
import { Link } from "react-router"
export default function RestCard({RestInfo}){

    return(
        <Link to={"/city/noida/" + RestInfo.info.id}>
        <div className="max-w-[280px] mb-2 transform duration-300 transition hover:scale-95">
        <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + RestInfo.info.cloudinaryImageId}></img>
        <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-xl ">{RestInfo?.info?.name}</div>
        <div className="flex gap-2 items-center">
        <span className="text-lg">{RestInfo?.info?.avgRating}</span>
        <span className="text-lg font-semibold">{RestInfo?.info?.sla?.slaString}</span>
        </div>

        <div className="text-gray-500 text-xl mt-1 h-7">{RestInfo?.info?.cuisines.join(" ")}</div>

        </div>
        </div>
        </Link>
    )

}