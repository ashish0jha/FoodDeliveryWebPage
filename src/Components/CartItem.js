import { useDispatch } from "react-redux";
import {removeItem} from "../utils/CartSlice";
import AddedToCart from "./AddedToCart";
import { useState } from "react";

const CartItem=(({menuPart})=>{

    const [showAdded,setShowAdded]=useState(false);

    const dispatch=useDispatch();

    const ClickHandler=(id)=>{
        dispatch(removeItem(id));
        setShowAdded(true);
        setTimeout(() => {
            setShowAdded(false);
        },2000);
    }

    return(
        <div>
            {showAdded && <AddedToCart msg="Removed from"/>} 
            {menuPart.map((menu,index)=>{
                const {id,name,defaultPrice,price,ratings,description,image}=menu;
                
                return(
                    <div key={index} className="w-[45vw] flex items-center justify-center cursor-pointer border-b-1 m-5 p-5 bg-white shadow-lg rounded-lg hover:bg-gray-300">
                        <div className="w-[35vw]">
                            <h3 className="font-bold text-lg">{name}</h3>
                            <h4>₹{price}</h4>
                
                            <div className="menuContent">
                                <div className="flex items-center mt-4">
                                    <h6 className="text-4.25 text-green-900 font-medium">★ {ratings || 4.1} </h6>
                                    <h6 className="text-4.25 text-green-900 font-medium">({ratings || 110}) </h6>
                                </div>

                                <p>{description}</p>
                            </div>
                        </div>
            
                        <div className="baks">
                            <img className="w-39 h-36 rounded-2xl shadow-2xl" src={image} alt=""/>
                
                            <button className="w-30 h-9.5 rounded-2xl outline-0 shadow-2xl text-red-600 font-extrabold bg-white border-1 -translate-y-5 translate-x-5 hover:bg-red-800 hover:text-white cursor-pointer" 
                            onClick={()=>ClickHandler(id)}
                            >REMOVE</button>
                         </div>
    
                    </div>
                )
            })}
        </div>
    )
})
export default CartItem;