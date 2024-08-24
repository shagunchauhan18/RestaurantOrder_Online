
import { useState } from "react";
import React from "react";
import ItemList from "./ItemList";
const RestaurantCatagory=({data ,showItems, setshowIndex})=>{
    //const [showItems,setshowItems]=useState(false);
const [collapse,setcollapse]=useState(true);
    
    const handleClick=()=>{
        setshowIndex();
        setcollapse(!collapse);
      
      
    }
  
    
    const l=data.itemCards.length;
    return <div>
        {/*Accordian header*/}
        <div className=" w-6/12 p-4 m-auto my-4 bg-gray-200 shadow-lg cursor-pointer ">
            <div className=" flex justify-between" onClick={handleClick}>
            <span className=" font-bold text-lg">
                {data.title} ({l})
            </span>
            <span className="p-1 m-1 ">⬇️
            </span>

            </div>
          
                {showItems&&collapse&&
                    <ItemList item={data.itemCards}/>

                
}

           

           
        </div>
       
      


    </div>
}
export default RestaurantCatagory;