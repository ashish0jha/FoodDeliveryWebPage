import {useState} from "react";
import Item from "./item";

const Accordian=({categories,menubtn,setshowIndex})=>{

    const menuPart=categories?.card?.card;

    const clickHandler=()=>{
        setshowIndex();
    }

    return(
        <div className="flex flex-col items-center justify-center rounded-lg border-1 border-[#ccc] p-3 shadow-xl m-5 hover:bg-gray-100">
        
            <div className="w-[45vw] flex align-center justify-between cursor-pointer" onClick={clickHandler}>
                <h2 className="font-semibold text-lg">{categories.card.card.title} ({menuPart.itemCards.length})</h2>
            </div>
            
            {menubtn && <Item menuPart={menuPart}/>}
                
        </div>
    )
}
export default Accordian;