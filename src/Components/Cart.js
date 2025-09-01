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
                        const price = item.card.info.defaultPrice ? item.card.info.defaultPrice : item.card.info.price;
                        return total + (price || 0);
                    }, 0) / 100}
                </div>
            </div>
            
            <CartItem menuPart={cartItems} />
            
        </div>
    )
}

export default Cart;