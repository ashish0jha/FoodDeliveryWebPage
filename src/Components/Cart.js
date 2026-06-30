import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { addItem, clearCart } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/constants";

const Cart = () => {

    const data = useSelector((store) => {
        return store.cart.items;
    });
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const clearCartHandler = async () => {
        try{
            const res = await axios.delete(baseUrl+"/cart/clear",{withCredentials:true});
            dispatch(clearCart());
            setCartItems([]);
        }
        catch(err){
            console.error(err.message)
        }
    }

    let [cartItems, setCartItems] = useState([]);
    const fetchCart = async () => {
        try {
            const res = await axios.get(baseUrl + "/cart/view", { withCredentials: true });
            const itemsFromBE = res.data.cartItems[0].items;
            setCartItems(itemsFromBE);
            for(let item of itemsFromBE){
                dispatch(addItem(item));
            }
        }
        catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        if(data.length>0){
            setCartItems(data);
            return;
        }
        fetchCart();
    }, [data])
   
    if(!cartItems) return;

    return (
        <div className="flex flex-col items-center bg-[#15201A] min-h-screen px-4">
            <h1 className="font-bold text-2xl md:text-3xl m-4 text-[#EAF7EE]">Cart</h1>

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
                    Total cost : ₹{cartItems?.reduce((total, item) => {
                        const price = item.price;
                        let qty = item.qty;
                        if (qty < 0) qty = 0;
                        return total + (price * qty || 0);
                    }, 0)}
                </div>
                <button
                    className="border border-[#1B5230] p-2 m-2 md:m-5 bg-[#27D673] text-[#06250F] rounded-lg font-bold cursor-pointer hover:bg-[#c3e3d1]" onClick={() => {
                        navigate("/Order")
                    }}>
                    Order
                </button>
            </div>
            {cartItems?.length == 0 ? (<a href="/" className="text-[#8FBE9F] hover:underline hover:text-[#27D673]">Cart is Empty</a>) : ""}
            <CartItem menuPart={cartItems} />

        </div>
    )
}

export default Cart;