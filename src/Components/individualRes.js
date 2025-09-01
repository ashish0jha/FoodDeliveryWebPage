import {useState, useEffect, use} from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/userestaurantMenu";
import Accordian from "./Accordian";   

const IndividualRes=()=>{

    const {ResId}=useParams();

    const [menubtn,setmenubtn]=useState(false);
    const [showIndex,setshowIndex]=useState(null);

    const json=useRestaurantMenu(ResId); //custom hook

    const indiData=json?.data?.cards[2]?.card?.card?.info;
    let menuPart=[];

    const itemCards2 = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    const itemCards1 = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;


    if (itemCards2) {
    menuPart=itemCards2;
    } else if (itemCards1) {
    menuPart=itemCards1;
    }

    const categories=json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
   
    if(!indiData){
        return <Shimmer/>
    }
    const {name,avgRating,totalRatingsString,costForTwoMessage,cuisines,areaName,sla}=indiData;
    
    return(
        <div className="flex flex-col items-center justify-center">
            
            <h1 className="font-extrabold text-3xl m-10">{name}</h1>
            
            <div className="w-[45vw] rounded-4xl border-1 border-[#ccc] shadow-2xl p-5 px-7.5 mb-10">
                <div className="flex items-center rounded-[20px] p-2.5">
                    <h3 className="px-1.25 m-1 bg-black rounded-lg text-white"><span id="text-amber-300">★ </span>{avgRating} </h3>
                    <h3 className="font-bold">({totalRatingsString}) </h3>
                    <h3 className="font-bold"> . {costForTwoMessage}</h3>
                </div>
                <h3 className="text-[orangered] mx-2.5">{cuisines.join(", ")}</h3>
                
                <div className="flex items-center ml-7.5">
                    <h4 style={{marginRight:"30px", fontWeight:"600"}}>Outlet</h4>
                    <p> {areaName}</p>
                </div>
                
                <h4 style={{marginLeft:"30px", fontWeight:"600"}}>{sla.slaString}</h4>
            </div>

            <p className="border-y-2 mb-8 py-2 font-extrabold text-xl">🌟 M  E  N  U 🌟</p>
            
            <div>
                {
                    categories.map((temp,index)=>{
                        return <Accordian 
                            key={temp.card.card.title}  
                            categories={temp} 
                            menubtn={index===showIndex ? true : false}  
                            setshowIndex={()=>setshowIndex(showIndex === index ? null : index)} />
                    })
                }
            </div>
            
        </div>
    )
}

export default IndividualRes;