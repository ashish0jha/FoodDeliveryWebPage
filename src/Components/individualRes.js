import { useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";

const IndividualRes = () => {

    const { ResId } = useParams();

    const [showIndex, setshowIndex] = useState(null);

    const restaurant = useRestaurantMenu(ResId); // custom hook

    if (!restaurant) {
        return <Shimmer />;
    }

    const { name, avgRating, totalRatings, costForTwo, cuisines, areaName, deliveryTime, menu } = restaurant;

    return (
        <div className="flex flex-col items-center justify-center">

            <h1 className="font-extrabold text-3xl m-10">{name}</h1>

            <div className="w-[45vw] rounded-4xl border-1 border-[#ccc] shadow-2xl p-5 px-7.5 mb-10">
                <div className="flex items-center rounded-[20px] p-2.5">
                    <h3 className="px-1.25 m-1 bg-black rounded-lg text-white"><span id="text-amber-300">★ </span>{avgRating} </h3>
                    <h3 className="font-bold">({totalRatings}) </h3>
                    <h3 className="font-bold"> . {costForTwo}</h3>
                </div>
                <h3 className="text-[orangered] mx-2.5">{cuisines.join(", ")}</h3>

                <div className="flex items-center ml-7.5">
                    <h4 style={{ marginRight: "30px", fontWeight: "600" }}>Outlet</h4>
                    <p> {areaName}</p>
                </div>

                <h4 style={{ marginLeft: "30px", fontWeight: "600" }}>{deliveryTime}</h4>
            </div>

            <p className="border-y-2 mb-8 py-2 font-extrabold text-xl">🌟 M  E  N  U 🌟</p>

            <div>
                {
                    menu.map((cat, index) => {
                        return <Accordian
                            key={cat.category}
                            category={cat}
                            menubtn={index === showIndex ? true : false}
                            setshowIndex={() => setshowIndex(showIndex === index ? null : index)} />
                    })
                }
            </div>

        </div>
    )
}

export default IndividualRes;
