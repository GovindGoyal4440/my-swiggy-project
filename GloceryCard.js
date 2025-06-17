

export default function GloceryCard({foodData}){

    return(
        <div className="flex-none">
        <a href={foodData.action.link}><img className="h-50 w-40 object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}></img></a>
        <h2 className="text-center font-bold">{foodData.action.text}</h2>
        
        </div>
    )

}