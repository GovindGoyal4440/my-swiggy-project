import { useSelector } from "react-redux"
import CheckCard from "./CheckCard";


export default function Checkout(){

    const items = useSelector(state=>state.cartslice.items);

    return(
        <div>
            {
                items.map(value=><CheckCard key={value.id} itemData={value}></CheckCard>)
            }
        </div>
    )
}


