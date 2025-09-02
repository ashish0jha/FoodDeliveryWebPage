import { LOGO_Link } from "../utils/links";
import { useState,useContext } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header=()=>{

    const [Name,setName]=useState("Login");

    //subscribing to the store
    const CartItems=useSelector((store)=>store.cart.items);
    
    const data=useContext(UserContext);
    const [logInName,setlogInName]=useState("");

    return(
        <div className="sticky top-0 z-50 flex justify-between shadow-xl items-center md:h-[100px] bg-white w-full">
            <div className='LogoPart'>
                <img className="w-25" src={LOGO_Link} alt="Logo" />

            </div> 
            <div className='nav-items'>
                <ul className="flex items-center mx-5 gap-10 text-2xl font-semibold">
                    <li className="p-2 m-1.25 hover:rounded-xl hover:scale-95 duration-100 hover:bg-gray-300">
                        <Link to="/"> Home</Link>
                    </li>
                    <li className=" p-2 m-1.25 hover:rounded-xl hover:scale-95 duration-100 hover:bg-gray-200">
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li className=" p-2 m-1.25 hover:rounded-xl hover:scale-95 duration-100 hover:bg-gray-200">
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className=" p-2 m-1.25 hover:rounded-xl hover:scale-95 duration-100 hover:bg-gray-200">
                    <Link to="/Cart">Cart - {CartItems.length}</Link> 
                    </li>
                    <button id="Login"
                    className="bg-white px-5 pb-1 text-xl rounded-lg border-2 border-black hover:bg-gray-950 hover:text-white"
                     onClick={()=>{
                        if(Name==="Login"){
                            setName("LogOut");
                            setlogInName(data.LoggedIn);
                        }else if(Name==="LogOut"){
                            setName("Login");
                            setlogInName("");
                        }
                    }}>{Name}</button>
                    
                </ul>
            </div>
        </div>
    )
}
export default Header;