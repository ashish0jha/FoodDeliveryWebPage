import { LOGO_Link } from "../utils/constants";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../utils/constants";

const Header = () => {

    const [Name, setName] = useState("Login");
    const navigate = useNavigate();

    //subscribing to the store
    const CartItems = useSelector((store) => store.cart.items);

    const { LoggedIn } = useContext(UserContext);

    const [logInName, setlogInName] = useState("");

    const logoutHandler = async (req, res)=>{
        try{
            const res = await axios.post(baseUrl + "/logout" , {},{withCredentials:true});
        }
        catch(err){
            console.error("ERROR : " + err.message);
        }
    }
    useEffect(()=>{
        setlogInName(LoggedIn);
        setName("LogOut")
    },[LoggedIn])

    return (
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
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="hidden sm:block p-1.5 md:p-2 m-0.5 md:m-1.25 rounded-xl hover:scale-95 duration-100 text-[#EAF7EE] hover:bg-[#123B22] hover:text-[#27D673]">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="p-1.5 md:p-2 m-0.5 md:m-1.25 rounded-xl hover:scale-95 duration-100 text-[#EAF7EE] hover:bg-[#123B22] hover:text-[#27D673]">
                        <Link to="/cart">Cart - {CartItems.length}</Link>
                    </li>
                    <li className="flex flex-col items-center justify-center">
                        {logInName && <p className="text-[10px] text-green-500">Welcome , {logInName}</p>}
                        <button id="Login"
                            className="bg-[#27D673] px-3 md:px-5 py-1 md:pb-1 text-sm md:text-xl rounded-lg border-2 border-[#27D673] text-[#06250F] font-bold hover:bg-[#0E2A18] hover:text-[#27D673] hover:border-[#1B5230] transition-colors duration-200 cursor-pointer"
                            onClick={() => {
                                if (Name === "Login") {
                                    navigate("/login")
                                    setName("LogOut");
                                    setlogInName(LoggedIn);
                                } else if (Name === "LogOut") {
                                    logoutHandler();
                                    setName("Login");
                                    setlogInName("");
                                }
                            }}>{Name}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;