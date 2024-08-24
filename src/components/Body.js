import React, { useContext } from 'react';
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';





const Body=()=>{
    
    const[searchText,setsearchText]=useState("");
   const {loginUser}= useContext(UserContext);
   const {setUserId}=useContext(UserContext);
    const [listOfRestaurants,setlistOfRestaurants]= useState([]);
    const[FilteredRestaurants,setFilteredRestaurants]=useState([]);
    console.log(listOfRestaurants);
useEffect(()=>{
fetchData();
},[]);



const fetchData=async ()=>{
    const dat=
    await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ");
        const json=await dat.json();
        console.log(json);
     setlistOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
}

const OnlineStatus=useOnlineStatus();
if(OnlineStatus==false){
    return <h1>Looks Like!!!YOU ARE OFFLINE..</h1>

}


//Conditional Rendering-Rendering on the basis of condition




    return listOfRestaurants.length==0?<Shimmer/>: (
        <div className="body ">
        <div className="filter flex items-center">
            <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black px-1" value={searchText} onChange={(e)=>
            {
                setsearchText(e.target.value)
            }}/>
            <button className=" px-4 py-1 bg-green-500 m-4 border border-black border-solid cursor-pointer" onClick={()=>{
                //filter the list of cards and update the UI
               const filteredRestaurants= listOfRestaurants.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())

                );
                setFilteredRestaurants(filteredRestaurants);
               
            }} >Search</button>
            </div>
            <div className=" m-4 p-4 ">
                <button className="px-4 py-2 bg-gray-300 m-4 border border-black border-solid" onClick={()=>{
                const filteredlist=listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4
                );
              setFilteredRestaurants(filteredlist);
            }}>
                Top Rated Restaurants
            </button>

            </div>
            <div className=" m-4 p-4 ">
                <label className=" mx-2">UserName</label>
                <input className="border border-black px-1" value={loginUser} onChange={(e)=>{
                    setUserId(e.target.value)
                }}/>

            </div>
           
            

            
             </div>
        <div className="flex flex-wrap">
         { FilteredRestaurants.map((restaurant)=>(
         <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> < RestaurantCard  resData={restaurant}/></Link>
          ))}

          
          
        </div>
        </div>
    )
}
export default Body;