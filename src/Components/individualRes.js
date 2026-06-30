import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Accordian from "./Accordian";
import axios from "axios";
import { baseUrl } from "../utils/constants";

const IndividualRes = () => {
    const { resId } = useParams();

    const [showIndex, setshowIndex] = useState(null);
    const navigate = useNavigate();

    const [restaurant,setRestaurant] = useState("");

    const fetchRestrarent = async () =>{
        try{
            const res = await axios.get(baseUrl + "/restaurent/"+ resId,{withCredentials:true});
            console.log(res.data.data);
            setRestaurant(res.data.data)
        }
        catch(err) {
            if(err.status === 401){
                navigate("/login")
            }
        }
    }
    useEffect(()=>{
        fetchRestrarent();
    },[])
    if (!restaurant) {
        return <Shimmer />;
    }
    const { id, name, avgRating, totalRatings, costForTwo, cuisines, areaName, deliveryTime, menu } = restaurant;

    return (
        <div className="flex flex-col items-center justify-center bg-[#15201A] min-h-screen pb-10 px-4">

            <h1 className="font-extrabold text-xl md:text-3xl m-6 md:m-10 text-[#EAF7EE] text-center">{name}</h1>

            <div className="w-full md:w-[45vw] rounded-4xl border border-[#1B5230] shadow-2xl p-4 md:p-5 px-5 md:px-7.5 mb-8 md:mb-10 bg-[#123B22]">
                <div className="flex items-center rounded-[20px] p-2.5 flex-wrap">
                    <h3 className="px-1.25 m-1 bg-[#0E2A18] rounded-lg text-[#27D673] text-sm md:text-base"><span className="text-amber-300">★ </span>{avgRating} </h3>
                    <h3 className="font-bold text-[#EAF7EE] text-sm md:text-base">({totalRatings}) </h3>
                    <h3 className="font-bold text-[#EAF7EE] text-sm md:text-base"> . {costForTwo}</h3>
                </div>
                <h3 className="text-[#27D673] mx-2.5 text-sm md:text-base">{cuisines.join(", ")}</h3>

                <div className="flex flex-col md:flex-row md:items-center ml-3 md:ml-7.5 mt-2 md:mt-0">
                    <h4 style={{ fontWeight: "600" }} className="text-[#EAF7EE] md:mr-[30px] text-sm md:text-base">Outlet</h4>
                    <p className="text-[#8FBE9F] text-sm md:text-base"> {areaName}</p>
                </div>

                <h4 style={{ fontWeight: "600" }} className="text-[#8FBE9F] ml-3 md:ml-[30px] text-sm md:text-base mt-1">{deliveryTime}</h4>
            </div>

            <p className="border-y-2 border-[#1B5230] mb-6 md:mb-8 py-2 font-extrabold text-base md:text-xl text-[#27D673] text-center w-full md:w-auto">🌟 M  E  N  U 🌟</p>

            <div className="w-full flex flex-col items-center">
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