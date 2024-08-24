import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addItems} from "../utils/Store/cartSlice"


const ItemList=({item})=>{
    const dispatch=useDispatch();
    const HandleItemAdd=(item)=>{
        dispatch( addItems(item));

    }
   
    return <div>
       { item.map(item=><div key={item.card.info.id} className="p-4 m-4 border-b-2 border-gray-400 text-left">
       <div className="flex justify-between">
        
        <div>
            <div className=" font-bold py-1 text-left">{item.card.info.name} </div>
            <div className=" py-1">₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100} </div>
            </div>
            <div>
            <img className=" w-32 h-32 rounded-xl shadow-2xl" src={CDN_URL+item.card.info.imageId}/>
          <button className=" px-2 py-0 my-1 border border-black bg-black text-white shadow-2xl rounded-xl " 
          onClick={()=>HandleItemAdd(item)}>
            Add+</button>
            
           
            </div>
            </div>
            <p className=" text-xs">{item.card.info.description}</p>
        </div>)}


    </div>
}
export default ItemList;