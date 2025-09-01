import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body'
import About from './Components/About';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router';
import Error from './Components/Error';
import Contact from './Components/Contact';
import IndividualRes from './Components/individualRes';
import Cart from './Components/Cart';
import {useContext,useState} from "react";
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const MainApp=()=>{
    const data=useContext(UserContext);
    const [userName,setUserName]=useState("Ashish Ojha");
    return(

        <Provider store={appStore}>
            <UserContext.Provider value={{LoggedIn:userName,setUserName}}>
                <div id="container">
                    <Header/>
                    <Outlet/>
                </div>

            </UserContext.Provider>
        </Provider>
        
    )
}
    

// const AppRouter=createBrowserRouter([
//     {
//         path:"/",
//         element:<MainApp/>,
//         errorElement:<Error/>,
//     },
//     {
//         path:"/About",
//         element:<About/>
//     },
//     {
//         path:"/Contact",
//         element:<Contact/>
//     }
// ])

//creating Children Routes
const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<MainApp/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/About",
                element:<About/>
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/Restaurant/:ResId",
                element:<IndividualRes/>
            },
            {
                path:"/Cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>,
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppRouter}/>);