import { addItem, addItemsQuantity } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import AddedToCart from "./AddedToCart";
import { useState } from "react";
import { Link } from "react-router-dom";

const Item = (({ items }) => {
    const dispatch = useDispatch();

    const [showAdded, setShowAdded] = useState(false);
    const clickHandler = (item) => {
        dispatch(addItem(item));
        setShowAdded(true);
        setTimeout(() => {
            setShowAdded(false);
        }, 2000);
    }
    return (
        <div className="w-full">
            {showAdded && <Link to="/Cart"><AddedToCart msg="Added to" /></Link>}
            {items.map((item, index) => {
                const { id, name, price, rating, ratingCount, description, image } = item;

                return (
                    <div key={index} className="w-full md:w-[45vw] flex items-center justify-between md:justify-center cursor-pointer border-b border-[#1B5230] m-3 md:m-5 pl-3 md:pl-6 pb-4 md:pb-6 gap-3">
                        <div className="w-[60%] md:w-[35vw]">
                            <h3 className="font-semibold text-sm md:text-lg text-[#EAF7EE]">{name}</h3>
                            <h4 className="text-[#8FBE9F] text-sm md:text-base">₹{price}</h4>

                            <div className="menuContent">
                                <div className="flex items-center mt-2 md:mt-4">
                                    <h6 className="text-[13px] md:text-4.25 text-[#27D673] font-medium">★ {rating || 4.1} </h6>
                                    <h6 className="text-[13px] md:text-4.25 text-[#27D673] font-medium">({ratingCount || 110}) </h6>
                                </div>

                                <p className="text-[11px] md:text-[12px] text-[#8FBE9F] line-clamp-2 md:line-clamp-none">{description}</p>
                            </div>
                        </div>

                        <div className="baks relative">
                            <img
                                className="w-24 md:w-39 h-20 md:h-36 rounded-2xl shadow-2xl object-cover"
                                src={image}
                                alt={name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://picsum.photos/300/300?grayscale";
                                }}
                            />

                            <button className="hover:bg-[#27D673] hover:text-[#06250F] w-20 md:w-30 h-7 md:h-9.5 rounded-2xl outline-0 shadow-2xl text-[#27D673] text-xs md:text-base font-extrabold bg-[#0E2A18] border border-[#1B5230] -translate-y-3 md:-translate-y-5 translate-x-2 md:translate-x-5 cursor-pointer"
                                onClick={() =>{
                                    if(item?.qty >= 1){
                                        let newQty = item?.qty + 1;
                                        dispatch(addItemsQuantity({quantity:newQty, id}))
                                    }else{
                                        item.qty=1;
                                        clickHandler(item)
                                    } 
                                }}>ADD+</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
})

export default Item;