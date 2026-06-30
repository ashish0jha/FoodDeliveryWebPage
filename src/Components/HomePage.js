import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../utils/UserContext';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import LoginPage from './LoginPage';
import { baseUrl } from '../utils/constants';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';

const HomePage = () => {
    const data = useContext(UserContext);
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const checkLogin = async(req,res)=>{
        try{
            const res = await axios.get(baseUrl+"/checklogin",{withCredentials:true});
            setUserName(res.data.fullName)
        }
        catch(err) {
            if(err.statusCode===401){
                navigate("/login")
            }
        }
    }
    useEffect(()=>{
        checkLogin();
    },[])
  return (
    <>
        <UserContext.Provider value={{ LoggedIn: userName, setUserName }}>
            {userName ? (<div id="container">
                <Header/>
                <Outlet/>
            </div>) : (
                <Provider store={appStore}>
                    <LoginPage />
                </Provider>
            )}
        </UserContext.Provider>
    </>
  )
}

export default HomePage