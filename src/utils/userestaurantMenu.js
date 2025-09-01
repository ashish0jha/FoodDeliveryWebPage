import {useState,useEffect} from "react";

const useRestaurantMenu=(resId)=>{
    
    const [MenuData,setMenuData]=useState(null);

    useEffect(()=>{
        fetchData(); 
    },[]);

    const fetchData=async ()=>{
        const data=await fetch(
            "https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER",{
                 headers:{
                    'x-cors-api-key':"temp_a09aeb4da8968b2402cf6a9e6253ecb1"
                }
            });

        const json=await data.json();

        setMenuData(json);
    }
    return MenuData;
}
export default useRestaurantMenu;