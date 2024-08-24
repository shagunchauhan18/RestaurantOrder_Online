import { useContext } from "react";
import {CDN_URL} from "../utils/constant";

const RestaurantCard=(props)=>{
  
    const{resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRatingString,deliveryTime}=resData?.info;
    return(
        < div className="p-4 m-4 w-[250px] bg-gray-300 rounded-lg shadow-2xl hover:bg-gray-400 ">
 <img  className="res-logo rounded-lg" src={CDN_URL +cloudinaryImageId}/>
 <h2 className=" font-bold py-4 text-xl">{name}</h2>
 <h4 className=" break-words">{cuisines.join(",")}</h4>
 <h5>{ avgRatingString}</h5>
 <h5>{resData.info.sla.deliveryTime} minutes</h5>
 
 </div>
   
    )
}
export default RestaurantCard;