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
       <div className="sticky top-0 z-50 flex justify-between shadow-xl items-center h-[70px] md:h-[100px] bg-[#15201A] border-b border-[#1B5230] w-full px-3 md:px-0 cursor-pointer">
            <div className='LogoPart pl-2 md:pl-5'>
                <a href="/">
                    <img className="w-16 md:w-25" src={LOGO_Link} alt="Logo" />
                </a>
            </div> 
            <div className='nav-items overflow-x-auto'>
                <ul className="flex items-center mx-2 md:mx-5 gap-3 md:gap-10 text-sm md:text-2xl font-semibold whitespace-nowrap">
                    <li className="p-1.5 md:p-2 m-0.5 md:m-1.25 rounded-xl hover:scale-95 duration-100 text-[#EAF7EE] hover:bg-[#123B22] hover:text-[#27D673]">
                        <Link to="/"> Home</Link>
                    </li>
                    <li className="p-1.5 md:p-2 m-0.5 md:m-1.25 rounded-xl hover:scale-95 duration-100 text-[#EAF7EE] hover:bg-[#123B22] hover:text-[#27D673]">
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li className="hidden sm:block p-1.5 md:p-2 m-0.5 md:m-1.25 rounded-xl hover:scale-95 duration-100 text-[#EAF7EE] hover:bg-[#123B22] hover:text-[#27D673]">
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className="p-1.5 md:p-2 m-0.5 md:m-1.25 rounded-xl hover:scale-95 duration-100 text-[#EAF7EE] hover:bg-[#123B22] hover:text-[#27D673]">
                    <Link to="/Cart">Cart - {CartItems.length}</Link> 
                    </li>
                    <button id="Login"
                    className="bg-[#27D673] px-3 md:px-5 py-1 md:pb-1 text-sm md:text-xl rounded-lg border-2 border-[#27D673] text-[#06250F] font-bold hover:bg-[#0E2A18] hover:text-[#27D673] hover:border-[#1B5230] transition-colors duration-200 cursor-pointer"
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