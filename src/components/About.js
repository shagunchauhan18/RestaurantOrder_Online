
import UserClass from "../components/UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
        super(props);
    }
   
  
    render(){
        
        return <div>

        <h1>About Class Component</h1>
        <div>
            <UserContext.Consumer>
                {(data)=>{
                   return <h1>{data.loginUser}</h1>
                }}
            </UserContext.Consumer>
        </div>
        <h2>This is namaste About</h2>
        
        <UserClass name={"Shagun"}/>
    </div>

    }
}


export default About;