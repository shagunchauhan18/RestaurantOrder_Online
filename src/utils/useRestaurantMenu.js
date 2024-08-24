
import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";

const useRestaurantMenu=(resid)=>{
    const [resInfo,setresInfo]=useState(null);
    useEffect(()=>{
        FetchMenu();
       

    },[]);
    
   
   
    const FetchMenu=async()=>
    {
        const dat=await fetch(MENU_URL+resid);
        const json=await dat.json();
        console.log(json);
        setresInfo(json.data);
       

    };
    


    return resInfo;

}
export default useRestaurantMenu;