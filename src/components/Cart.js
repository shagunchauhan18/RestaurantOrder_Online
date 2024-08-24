
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/Store/cartSlice";

const Cart=()=>{
const cardItem=useSelector((store)=>store.cart.items);
const dispatch=useDispatch();
const clearHandle=()=>{
    dispatch(clearCart());
}


    return <div className=" text-center">
        <h1 className=" m-4 p-4 text-3xl font-bold">Cart🛒</h1>
        <button className="mx-2 p-2 border border-black bg-red-600 text-white font-bold shadow-2xl
         rounded-lg cursor-pointer"  onClick={clearHandle}>Clear Cart🛒</button>
        <div className="w-6/12 m-auto"> 
            <ItemList item={cardItem}/>
        </div>

    </div>
}
export default Cart;