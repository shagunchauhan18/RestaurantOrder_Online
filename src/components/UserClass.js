import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo :{
                name: "Dummy Name",
                location:"Default"

            }
        }
       

    }
   async componentDidMount(){
    const dat= await fetch("https://api.github.com/users/akshaymarch7");
    const json= await dat.json();
    this.setState(
        {
            userInfo: json
        }
    );

       console.log(json);
    }
    render(){
        
        return (
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url}/>
            <h1>Name : {this.state.userInfo.name}</h1>
            <h4>Location : {this.state.userInfo.location}</h4>
            <h3>Contact Info: @shagun_171</h3>

        </div>
        )
    }
}
export default UserClass;