import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(clearCart());
    }
    return (
        <div className="flex flex-col items-center bg-[#15201A] min-h-screen px-4">
            <h1 className="font-bold text-2xl md:text-3xl m-4 text-[#EAF7EE]">Cart</h1>

            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 w-full md:w-auto">
                {cartItems.length == 0 ? <a href="/"
                    className="border border-[#1B5230] p-2 m-2 md:m-5 bg-[#27D673] text-[#06250F] rounded-lg font-bold cursor-pointer hover:bg-[#3CE585]"
                    onClick={clickHandler}>
                    Explore Restaurents
                </a> : <button
                    className="border border-[#1B5230] p-2 m-2 md:m-5 bg-[#27D673] text-[#06250F] rounded-lg font-bold cursor-pointer hover:bg-[#3CE585]"
                    onClick={clickHandler}>
                    Clear Cart
                </button>}
                <div className="text-lg md:text-xl font-bold m-2 md:m-5 text-[#EAF7EE]">
                    Total cost : ₹{cartItems.reduce((total, item) => {
                        const price = item.price;
                        let qty = item.qty;
                        if(qty<0) qty=0;
                        return total + (price*qty || 0);
                    }, 0)}
                </div>
                <button
                    className="border border-[#1B5230] p-2 m-2 md:m-5 bg-[#27D673] text-[#06250F] rounded-lg font-bold cursor-pointer hover:bg-[#c3e3d1]" onClick={()=>{
                        navigate("/Order")
                    }}>
                    Order
                </button>
            </div>
            {cartItems.length == 0 ? (<a href="/" className="text-[#8FBE9F] hover:underline hover:text-[#27D673]">Cart is Empty</a>) : ""}
            <CartItem menuPart={cartItems} />


        </div>
    )
}

export default Cart;