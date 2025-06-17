
export default function DineoutRestaurantscards({RestData}){

    return(
        <div className="max-w-sm flex-none">
            <a href={RestData.cta.link} target="_blank">
            <div className="relative">
                <img className=" w-80 h-48 object-cover"src={"https://media-assets.swiggy.com/swiggy/image/upload/" + RestData?.info?.mediaFiles[0]?.url}></img>
                <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black to-transparent"></div>
                <p className="absolute bottom-4 left-4 text-xl text-white">{RestData?.info?.name}</p>
                <p className="absolute bottom-4 right-4 text-xl text-white">{RestData?.info?.rating?.value}</p>

            </div>
            </a>
        </div>   
    )
}