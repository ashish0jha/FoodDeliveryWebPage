import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import AddedToCart from "./AddedToCart";
import { useState } from "react";
import { Link } from "react-router";

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
        <div>
            {showAdded && <Link to="/Cart"><AddedToCart msg="Added to" /></Link>}
            {items.map((item,index) => {
                const { id, name, price, rating, ratingCount, description, image } = item;

                return (
                    <div key={index} className="w-[45vw] flex items-center justify-center cursor-pointer border-b-1 m-5 pl-6 pb-6">
                        <div className="w-[35vw]">
                            <h3 className="font-semibold text-lg">{name}</h3>
                            <h4>₹{price}</h4>

                            <div className="menuContent">
                                <div className="flex items-center mt-4">
                                    <h6 className="text-4.25 text-green-900 font-medium">★ {rating || 4.1} </h6>
                                    <h6 className="text-4.25 text-green-900 font-medium">({ratingCount || 110}) </h6>
                                </div>

                                <p className="text-[12px] text-gray-600">{description}</p>
                            </div>
                        </div>

                        <div className="baks">
                            <img
                                className="w-39 h-36 rounded-2xl shadow-2xl"
                                src={image}
                                alt={name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://picsum.photos/300/300?grayscale";
                                }}
                            />

                            <button className="w-30 h-9.5 rounded-2xl outline-0 shadow-2xl text-green-900 font-extrabold bg-white border-1 -translate-y-5 translate-x-5 cursor-pointer"
                                onClick={() => clickHandler(item)
                                }>ADD+</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
})

export default Item;
