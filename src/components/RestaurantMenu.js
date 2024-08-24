import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";
import { useState } from "react";
const RestaurantMenu=()=>
{
   
    const [showIndex,setshowIndex]=useState(1)
   
    const {resid}=useParams();
    console.log(resid);
    const resInfo=useRestaurantMenu(resid);
    
   
    if(resInfo==null){
        return <Shimmer/>
    }
   
  
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const { itemCards }=  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const catagory=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(catagory);
   
    
    return (
        

        <div className=" text-center">
           

            <h1 className=" font-bold my-5 text-3xl border border-black shadow-2xl bg-slate-300">{name}</h1>
            <h3 className=" font-bold my-1 text-lg">{cuisines.join(", ")}=={costForTwoMessage}</h3>
           { catagory.map((catagory,index)=>
           <RestaurantCatagory key={catagory?.card?.card?.title}
            data={catagory?.card?.card}
             showItems={index==showIndex?true:false}
            
             setshowIndex={()=>setshowIndex(index)}/>) }
                     
          
            

        </div>
    )
};
export default RestaurantMenu;