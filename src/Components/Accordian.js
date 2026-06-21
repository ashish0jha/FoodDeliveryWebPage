import { useState } from "react";
import Item from "./item";

const Accordian = ({ category, menubtn, setshowIndex }) => {

    const [OpenClose, setOpenClose] = useState("+");

    const clickHandler = () => {
        setshowIndex();
        setOpenClose(OpenClose === "+" ? "⨯" : "+");
    }

    return (
        <div className="flex flex-col items-center justify-center rounded-lg border border-[#1B5230] p-3 shadow-xl m-3 md:m-5 bg-[#123B22] hover:bg-[#0E2A18] w-full md:w-auto">

            <div className="w-full md:w-[45vw] flex align-center justify-between cursor-pointer" onClick={clickHandler}>
                <h2 className="font-semibold text-sm md:text-lg text-[#EAF7EE]">{category.category} ({category.items.length})</h2>
                <h2 className="font-[500] text-2xl md:text-3xl text-[#27D673]">{OpenClose}</h2>
            </div>

            {menubtn && <Item items={category.items} />}

        </div>
    )
}
export default Accordian;