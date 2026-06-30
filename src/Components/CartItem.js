import { useDispatch, useSelector } from "react-redux";
import { addItemsQuantity, removeItem } from "../utils/CartSlice";
import AddedToCart from "./AddedToCart";
import { useState } from "react";
import CartItemsIndividual from "./CartItemsIndividual";

const CartItem = (({ menuPart }) => {
    const [showAdded, setShowAdded] = useState(false);

    return (
        <div className="w-full flex flex-col items-center">
            {showAdded && <AddedToCart msg="Removed from" />}
            {menuPart.map((menu, index) => {
                return <CartItemsIndividual key={menu.id} menu={menu}/>
            })}
        </div>
    )
})
export default CartItem;