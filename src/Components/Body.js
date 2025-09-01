import Cards3 from "./Card3";
import { useState , useEffect,useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router";
import onlineStatus from "../utils/useonlinestatus";
import UserContext from "../utils/UserContext";

let resiii;

const Body=()=>{
    const [ResList , SetResList]=useState([]);

    const [btnName,setbtnname]=useState("Top Rated Restaurant");

    const [searchText,setsearchText]=useState("");

    const [msg,setmsg]=useState("");

    const [baks,setbaks]=useState("");

    const isOnline=onlineStatus();
    
    const {LoggedIn,setUserName}=useContext(UserContext);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async ()=>{
        const Data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json=await Data.json();

        // const tot=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        // resiii=tot;
        // SetResList(tot)
        
        const findRestaurants = (obj) => {
            if (obj && typeof obj === 'object') {
                if (obj.hasOwnProperty('restaurants')) {
                    return obj.restaurants;
                }
                for (let key in obj) {
                    const result = findRestaurants(obj[key]);
                    if (result) return result;
                }
            }
            return null;
        };

        const tot = findRestaurants(json);
        resiii=tot;
        SetResList(tot);

    }

    if(ResList.length===0){
        return <Shimmer/>
    }
    
    if(!isOnline){
        return(
            <div>
                <h1>🔴 Offline , Please check your internet connection!!</h1>
                <h4>Click Below to Engage yourself</h4>
                <button onClick={()=>{
                    setbaks("F*ck You, Bi*ch !!! ")
                }}>CLick Here</button>
                <h1 id="baks3">{baks}</h1>
            </div>
            
        )
    }
    return(
        <div id="body">
            <div className="flex items-center justify-evenly">
            
                <div className="px-5 h-7.5 rounded-lg bg cursor-pointer border-2 border-black hover:text-white hover:bg-black">Restaurent count : {ResList.length}</div>
                
                <div className='search-bar'>

                    <input type="text" placeholder='Enter Food-Items' className='h-10 m-4 w-75 px-3 shadow-2xl outline-0 border-1 border-[#ccc] hover:shadow-2xl rounded-4xl hover:scale-105 duration-300'
                        value={searchText}
                        onChange={(e)=>{
                            setsearchText(e.target.value);
                        }}
                        onKeyDown={(e)=>{
                            if(e.key==="Enter"){
                                const filteredData=resiii.filter((resty)=>(
                                    resty.info.name.toLowerCase().includes(searchText.toLowerCase())
                                ));
                                if(filteredData.length===0){
                                    setTimeout(() => {
                                        setmsg("");
                                    }, 2000);
                                    setmsg("No Restaurent Found !!");
                                }else{
                                    SetResList(filteredData);
                                    setbtnname("Show All Restaurants");
                                    setmsg("")
                                }
                            }
                        }}
                    />

                </div>
                {/* <div>
                    <label>
                        UserName : 
                    </label>
                    <input 
                        className="border-2 border-black rounded-lg pl-2"
                        type="text"
                        value={LoggedIn}
                        onChange={(e)=>setUserName(e.target.value)}
                    />
                </div> */}
                <div>
                    <button className="px-5 h-7.5 rounded-lg bg cursor-pointer border-2 border-black hover:text-white hover:bg-black"
                    onClick={()=>{
                        const filteredData = ResList.filter((resty)=>
                        (
                            resty.info.avgRating>4.2
                        ))

                        setbtnname(btnName==="Top Rated Restaurant" ? "Show All Restaurants" : "Top Rated Restaurant")

                        if(btnName==="Show All Restaurants"){
                        SetResList(resiii)
                        }else{
                        SetResList(filteredData);
                        }
                        
                    }}>{btnName}</button>
                </div>
            </div>
            
            <h3 className="m-5 text-center">{msg}</h3>
            <div className="flex flex-wrap justify-center my-4 gap-8 ">
                {/* <ResCard/>
                <Cards TextOnimg="Kuchh bhi" ResName="Adil Hotel" RateTime="4.4 , 35 -40 mins" Cuisines="Biryani,tandoor,chhindwara Locality" />
                <Cards1 TextOnimg="100 F ABOVE 999" ResName="Gupta Bhojnalay" RateTime="4.1 , 35 -40 mins" Cuisines="Fast Food,Indian, Beverages" />
                <Cards2  Res={restaurants[0]} /> */}

                {
                    ResList.map((resty)=>
                    (
                        <Link  key={resty.info.id} to={`/Restaurant/${resty.info.id}`}>
                            <Cards3 Res={resty}/>
                        </Link> 
                    ))
                }
                

                {/* {ResCard2('Hotel Sai Nath','175 OFF ABOVE 699','4.2 , 35-40 mins' , 'North Indian, South Indian')}
                {ResCard2('Raimens Cafe 79','df','4.4 , 45-50 mins','Bakery,Pizzas,Snakes')} */}
            </div>
        </div>
    )
}

export default Body;