import {useState,useEffect} from "react";
const useonlinestatus=()=>{
    const [onlinetusts,setonlineStatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlineStatus(false);
        })

        window.addEventListener("online",()=>{
            setonlineStatus(true);
        }) 
    },[]);
    return onlinetusts;
}

export default useonlinestatus;