import { useDispatch } from "react-redux";
import { removeItem } from "../utils/CartSlice";
import AddedToCart from "./AddedToCart";
import { useState } from "react";

const CartItem = (({ menuPart }) => {

    const [showAdded, setShowAdded] = useState(false);

    const dispatch = useDispatch();

    const ClickHandler = (id) => {
        dispatch(removeItem(id));
        setShowAdded(true);
        setTimeout(() => {
            setShowAdded(false);
        }, 2000);
    }

    return (
        <div className="w-full flex flex-col items-center">
            {showAdded && <AddedToCart msg="Removed from" />}
            {menuPart.map((menu, index) => {
                const { id, name, defaultPrice, price, ratings, description, image } = menu;

                return (
                    <div key={index} className="w-full md:w-[45vw] flex items-center justify-between md:justify-center cursor-pointer border-b border-[#1B5230] m-3 md:m-5 p-3 md:p-5 bg-[#123B22] shadow-lg rounded-lg hover:bg-[#0E2A18] gap-3">
                        <div className="w-[60%] md:w-[35vw]">
                            <h3 className="font-bold text-sm md:text-lg text-[#EAF7EE]">{name}</h3>
                            <h4 className="text-[#8FBE9F] text-sm md:text-base">₹{price}</h4>

                            <div className="menuContent">
                                <div className="flex items-center mt-2 md:mt-4">
                                    <h6 className="text-[13px] md:text-4.25 text-[#27D673] font-medium">★ {ratings || 4.1} </h6>
                                    <h6 className="text-[13px] md:text-4.25 text-[#27D673] font-medium">({ratings || 110}) </h6>
                                </div>

                                <p className="text-[11px] md:text-base text-[#8FBE9F] line-clamp-2 md:line-clamp-none">{description}</p>
                            </div>
                        </div>

                        <div className="baks relative">
                            <img className="w-24 md:w-39 h-20 md:h-36 rounded-2xl shadow-2xl object-cover" src={image} alt="" />

                            <button className="w-20 md:w-30 h-7 md:h-9.5 rounded-2xl outline-0 shadow-2xl text-[#27D673] text-xs md:text-base font-extrabold bg-[#0E2A18] border border-[#1B5230] -translate-y-3 md:-translate-y-5 translate-x-2 md:translate-x-5 hover:bg-red-800 hover:text-white cursor-pointer"
                                onClick={() => ClickHandler(id)}
                            >REMOVE</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
})
export default CartItem;