import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body'
import About from './Components/About';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom';
import Error from './Components/Error';
import Contact from './Components/Contact';
import IndividualRes from './Components/individualRes';
import Cart from './Components/Cart';
import { useContext, useState } from "react";
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Order from './Components/Order';
import LoginPage from './Components/LoginPage';
import axios from 'axios';
import { baseUrl } from './utils/constants';
import HomePage from './Components/HomePage';

const MainApp = () => {
    return (
        <Provider store={appStore}>
            <HomePage/>
        </Provider>
    )
}

//creating Children Routes
const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/Restaurant/:ResId",
                element: <IndividualRes />
            },
            {
                path: "/Cart",
                element: <Cart />
            },
            {
                path: "/Order",
                element: <Order />
            },
        ],
        errorElement: <Error />,
    },
    {
        path: "/login",
        element: <LoginPage />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppRouter} />);