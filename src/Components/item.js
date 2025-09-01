import {addItem} from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import AddedToCart from "./AddedToCart";
import { useState } from "react";

const Item=(({menuPart})=>{
    const dispatch=useDispatch();

    const [showAdded,setShowAdded]=useState(false);
    const clickHandler=(item)=>{
        dispatch(addItem(item));
        setShowAdded(true);
        setTimeout(() => {
            setShowAdded(false);
        },2000);
    }
    return(
        <div>
            {showAdded && <AddedToCart msg="Added to"/>}
            {menuPart.itemCards.map((menu)=>{
                const {id,name,defaultPrice,price,ratings,description,imageId}=menu.card.info;
                
                return(
                    <div key={id} className="w-[45vw] flex items-center justify-center cursor-pointer border-b-1 m-5 pl-6 pb-6">
                        <div className="w-[35vw]">
                            <h3 className="font-semibold text-lg">{name}</h3>
                            <h4>₹{defaultPrice ? defaultPrice/100 : price/100}</h4>
                
                            <div className="menuContent">
                                <div className="flex items-center mt-4">
                                    <h6 className="text-4.25 text-green-900 font-medium">★ {ratings.aggregatedRating.rating || 4.1} </h6>
                                    <h6 className="text-4.25 text-green-900 font-medium">({ratings.aggregatedRating.ratingCountV2 || 110}) </h6>
                                </div>

                                <p className="text-[12px] text-gray-600">{description}</p>
                            </div>
                        </div>
            
                        <div className="baks">
                            <img className="w-39 h-36 rounded-2xl shadow-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+imageId} alt=""/>
                
                            <button className="w-30 h-9.5 rounded-2xl outline-0 shadow-2xl text-green-900 font-extrabold bg-white border-1 -translate-y-5 translate-x-5 cursor-pointer"
                             onClick={()=>clickHandler(menu)
                            }>ADD+</button>
                         </div>
    
                    </div>
                )
            })}
        </div>
    )
})

export default Item;