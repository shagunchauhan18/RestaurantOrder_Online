import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import About from "./components/About"
import Contact from './components/Contact';
import Errors from './components/Errors';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/Store/appStore';
import Cart from './components/Cart';



/*const heading=React.createElement("h1",{},"hello");
this creates an object which later on rendered as html element
//React.createElement---->jsobject------>(render)htmlelement*/



/*const heading =React.createElement("h1",{id:"heading"},"Namaste React");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/
//JSX-html like
//JSX
//JSX----> babel transpiles it to React.createElement()----->js object---->(render)htmlElement

/*const jsxheading=<h1 id="heading">Namaste React by jsx</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading); */

//components
/*const headingfunc=()=>{
    return <h1>Namaastw </h1>
}*/


//or
/*const headingfunc=()=>(<h1> 
    Namaastw </h1>
    );*/


//or
    /* const heading=()=> <h1 className="as">Namaste React</h1>;/*


//React element
    /* const heading=(
        //simple jsx
        <h1 className="iss" >i m react
         element</h1>
        )*/ 


      /*  const ele=(
            <span>hii i m ele</span>
        )
        const Title=(
            
            <h1>
                {ele}
                 Namaste React by title
            </h1>
        );
        //title component rendered
        const HeadingComp=()=>(
            <div className="container">
                
                {Title}
                <h1>namaste react by functional components</h1>
            </div>
        );

        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<HeadingComp/>);*/

        //Food ordering app
       






  const AppLayout=()=>{
    const xyz="Mitaali";
    const [UserId,setUserId]=useState();
    useEffect(()=>{
        const data={
            name:"Shagun"
        }
        setUserId(data.name);

    },[])
        return (
            <Provider store={appStore}>
            <UserContext.Provider value={{loginUser: UserId,setUserId}}>
        <div className="app">
           <Header/>
          <Outlet/>

        </div>
        </UserContext.Provider>
        </Provider>
        )
    }
    const appRouter=createBrowserRouter([
        {
            path:"/"
            ,element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                { path:"/contact",
                element:<Contact/>
        
                },
                {
                    path:"/restaurants/:resid",
                    element:<RestaurantMenu/>
                },
                {
                    path:"/cart",
                    element: <Cart/>

                }

            ],
            errorElement:<Errors/>
        },
       
    ])
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter}/>);
    