import axios from 'axios';
import React from 'react'
import { baseUrl } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/CartSlice';
import Order from './Order';

const CartHeader = ({cartItems,setCartItems}) => {
    const dispatch = useDispatch();
    const clearCartHandler = async () => {
        try{
            const res = await axios.delete(baseUrl+"/cart/clear",{withCredentials:true});
            dispatch(clearCart());
            ()=>setCartItems([]);
        }
        catch(err){
            console.error(err.message)
        }
    }
    const totalAmounToPay = cartItems?.reduce((total, item) => {
        const price = item.price;
        let qty = item.qty;
        if (qty < 0) qty = 0;
        return total + (price * qty || 0);
    }, 0)

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 w-full md:w-auto">
        {cartItems?.length == 0 ? <a href="/"
            className="border border-[#1B5230] p-2 m-2 md:m-5 bg-[#27D673] text-[#06250F] rounded-lg font-bold cursor-pointer hover:bg-[#3CE585]"
            onClick={clearCartHandler}>
            Explore Restaurents
        </a> : <button
            className="border border-[#1B5230] p-2 m-2 md:m-5 bg-[#27D673] text-[#06250F] rounded-lg font-bold cursor-pointer hover:bg-[#3CE585]"
            onClick={clearCartHandler}>
            Clear Cart
        </button>}
        <div className="text-lg md:text-xl font-bold m-2 md:m-5 text-[#EAF7EE]">
            Total cost : ₹{totalAmounToPay}
        </div>
        <Order amount={totalAmounToPay} setCartItems={setCartItems}/>
    </div>
  )
}

export default CartHeader