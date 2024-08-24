

import {LOGO_URL} from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from "react-redux";

const Header=()=>{
    
    let btnname="Login";
  
    const[btnnameReact,setbtnnameReact]=useState("Login");
    const OnlineStatus=useOnlineStatus();
    const {loginUser ,setUserId}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems);
    
    return(
    
        <div className="flex justify-between bg-pink-200 shadow-xl m-2">
            <div className="logo-container">
                <img className=" w-24" src={LOGO_URL}/>
            </div>
          
            <div className="nav-items">
                <ul className="flex p-4 m-4">
                    <li className="px-4 ">
                        Online Status:{OnlineStatus?"🟢 " :"🔴 "}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                        </li>
                        
                    <li className="px-4"><Link to="/about">About</Link>
                    </li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li  className="px-4 font-bold text-xl" >
                       <Link to="/cart">Cart🛒({cartItems.length})</Link> 
                        </li>
                   <li className=" text-sm">{loginUser} </li>
                    <button className="login "onClick={()=>{
                         setbtnnameReact("Logout");
                          console.log(btnname);

                    }
                      
                    }>{btnnameReact}</button>
                </ul>
                


            </div>



        </div>
    )
};
export default Header;