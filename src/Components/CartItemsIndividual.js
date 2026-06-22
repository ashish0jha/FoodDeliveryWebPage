import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItemsQuantity, removeItem } from '../utils/CartSlice';

const CartItemsIndividual = ({menu}) => {
    const dispatch = useDispatch();

    const ClickHandler = (id) => {
        dispatch(removeItem(id));
    }

    const { id, name, defaultPrice, price, ratings, description, image,qty } = menu;
    const [quantity,setQuantity] = useState(qty);
    return (
        <div className="w-full md:w-[45vw] flex items-center justify-between md:justify-center cursor-pointer border-b border-[#1B5230] m-3 md:m-5 p-3 md:p-5 bg-[#123B22] shadow-lg rounded-lg hover:bg-[#0E2A18] gap-3">
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

            <div className="baks relative flex flex-col items-center">
                <img className="w-24 md:w-39 h-20 md:h-36 rounded-2xl shadow-2xl object-cover" src={image} alt="" />

                <button className="w-20 md:w-30 h-7 md:h-9.5 rounded-2xl outline-0 shadow-2xl text-[#27D673] text-xs md:text-base font-extrabold bg-[#0E2A18] border border-[#1B5230] -translate-y-3 md:-translate-y-5 translate-x-2 hover:bg-red-800 hover:text-white cursor-pointer"
                    onClick={() => ClickHandler(id)}
                >REMOVE</button>

                <div className="flex justify-between w-full text-white text-2xl">
                    <p className="font-bold bg-green-900 p-1 rounded-[50%] h-10 w-10 hover:bg-green-700 text-center" onClick={()=>{
                        setQuantity(quantity+1)
                        dispatch(addItemsQuantity({quantity:quantity+1,id}))
                    }}>+</p>
                    <p className="font-bold bg-green-900 p-1 h-10 w-10 hover:bg-green-700 text-center">{quantity}</p>
                    <p className="font-bold bg-green-900 p-1 rounded-[50%] h-10 w-10 hover:bg-red-700 text-center" onClick={()=>{
                        const newQty = quantity > 0 ? quantity - 1 : 0;

                        
                        
                        if (newQty === 0) {
                            setQuantity(qty);
                            ClickHandler(id);
                        } else {
                            setQuantity(newQty)
                            dispatch(addItemsQuantity({ quantity: newQty, id }));
                        }
                    }}>-</p>
                </div>
            </div>

        </div>
    )
}

export default CartItemsIndividual;