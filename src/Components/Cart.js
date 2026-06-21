import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import {clearCart} from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const clickHandler=()=>{
        dispatch(clearCart());
    }
    return(
        <div className="flex flex-col items-center">
            <h1 className="mb-8 p-5 font-extrabold text-xl m-4 ">Cart</h1>
            
            
            <div className="flex justify-between items-center">
                <button
                    className="border border-black p-2 m-5 bg-black text-white rounded-lg font-bold cursor-pointer"
                    onClick={clickHandler}>
                    Clear Cart
                </button>
                <div className="text-xl font-bold m-5">
                    Total cost : ₹{cartItems.reduce((total, item) => {
                        const price = item.price;
                        return total + (price || 0);
                    }, 0)}
                </div>
            </div>
            {cartItems.length==0 ? (<a href="/" className="text-gray-400 hover:underline">Cart is Empty</a>) : ""}
            <CartItem menuPart={cartItems} />
            
        </div>
    )
}

export default Cart;