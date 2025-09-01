import React from 'react';
import ReactDOM from 'react-dom/client';

const ResCard=()=>(
    <div className='res-card'>
        <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG'/>
        <h3 id="TextOnImg">ITEMS AT 99</h3>
        <div className='textpart'>
            <h3>Pizza Hut</h3>
            <h3>4.3 ☆ , 40-45 mins</h3>
            <p>Pizzas,Chhindwara City</p>
        </div>
        
    </div>
)

//this is my code , when i didn't knew about "Props"
// const ResCard2=function(ResName,TextOnImg,RateTime,Cuisine){
//     return (
//         <div className='res-card'>
//             <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG'/>
//             <h3 id="TextOnImg">{TextOnImg}</h3>
//             <div className='textpart'>
//                 <h3>{ResName}</h3>
//                 <h3>{RateTime}</h3>
//                 <p>{Cuisine}</p>
//             </div>
            
//         </div>
//     )
// }

//making of cards using props
// const Cards=(props)=>{
//     return(
//         <div className='res-card'>
//             <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG'/>
//             <h3 id="TextOnImg">{props.TextOnimg}</h3>
//             <div className='textpart'>
//                 <h3>{props.ResName}</h3>
//                 <h3>{props.RateTime}</h3>
//                 <p>{props.Cuisines}</p>
//             </div>
//         </div>
//     )
// }
//destructuring to remove props. in every use ;
const Cards=({TextOnimg,ResName,RateTime,Cuisines})=>{

    return(
        <div className='res-card'>
            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG'/>
            <h3 id="TextOnImg">{TextOnimg}</h3>
            <div className='textpart'>
                <h3>{ResName}</h3>
                <h3>{RateTime}</h3>
                <p>{Cuisines}</p>
            </div>
        </div>
    )
}
//destructuring cal also done by 
const Cards1=(props)=>{
    const {TextOnimg,ResName,RateTime,Cuisines}=props;
    return(
        <div className='res-card'>
            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG'/>
            <h3 id="TextOnImg">{TextOnimg}</h3>
            <div className='textpart'>
                <h3>{ResName}</h3>
                <h3>{RateTime}</h3>
                <p>{Cuisines}</p>
            </div>
        </div>
    )
}
//******************************************************
//Config Driven UI:-UI on the basis of outer data 
const restaurants= [
    {
    "info": {
        "id": "150591",
        "name": "Satkar Restaurant",
        "cloudinaryImageId": "rvxp5xbniat84r6efku2",
        "locality": "Sinchai Colony",
        "areaName": "Satkar Chowk",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "South Indian",
        "Indian",
        "Salads",
        "Desserts"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "21553",
        "avgRatingString": "4.4",
        "totalRatingsString": "3.1K+",
        "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 13.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "13.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-08-23 22:45:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
            },
            {
            "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
            "description": "Delivery!"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
                },
                {
                "attributes": {
                    "description": "Delivery!",
                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png"
                }
                }
            ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-487668e3-6df3-4b6b-a795-75f600efcb21"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "151515",
        "name": "Gupta Bhojnalay",
        "cloudinaryImageId": "jo9pdipf4elcuch8g55q",
        "locality": "fulwara chowk",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Fast Food",
        "Indian",
        "Beverages"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "91635",
        "avgRatingString": "4.1",
        "totalRatingsString": "452",
        "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 10.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "10.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-08-23 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
                }
            ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-487668e3-6df3-4b6b-a795-75f600efcb21"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "234875",
        "name": "Adil Hotel",
        "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
        "locality": "Rautha Wada",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹150 for two",
        "cuisines": [
        "Biryani",
        "Tandoor"
        ],
        "avgRating": 4.4,
        "parentId": "27123",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.3K+",
        "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 11.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "11.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-08-24 00:00:00",
        "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {

        },
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-487668e3-6df3-4b6b-a795-75f600efcb21"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "151518",
        "name": "Bakery World",
        "cloudinaryImageId": "mt2aggiscfl3yviatwng",
        "locality": "Parasia Road",
        "areaName": "Parasia Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Bakery",
        "Ice Cream",
        "Snacks",
        "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "40363",
        "avgRatingString": "4.3",
        "totalRatingsString": "288",
        "sla": {
        "deliveryTime": 43,
        "lastMileTravel": 14.1,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "14.1 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-08-23 22:30:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
                }
            ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-487668e3-6df3-4b6b-a795-75f600efcb21"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "151649",
        "name": "Hotel Sai Nath & Sai Restaurant",
        "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
        "locality": "railway station",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "101802",
        "avgRatingString": "4.2",
        "totalRatingsString": "1.0K+",
        "sla": {
        "deliveryTime": 43,
        "lastMileTravel": 11.3,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "11.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-08-23 22:30:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
                }
            ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹175 OFF",
        "subHeader": "ABOVE ₹699",
        "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-487668e3-6df3-4b6b-a795-75f600efcb21"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "658210",
        "name": "The Fusion Lounge",
        "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
        "locality": "Triloki nagar",
        "areaName": "Railway Station",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "395453",
        "avgRatingString": "4.1",
        "totalRatingsString": "359",
        "sla": {
        "deliveryTime": 53,
        "lastMileTravel": 11.9,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "11.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-08-23 23:00:00",
        "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {

        },
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-487668e3-6df3-4b6b-a795-75f600efcb21"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "522144",
        "name": "Blue Chilli Restaurant",
        "cloudinaryImageId": "je6qlse8csxgcfpuoybe",
        "locality": "Ambedkar Nagar",
        "areaName": "Prasia Road",
        "costForTwo": "₹150 for two",
        "cuisines": [
        "South Indian",
        "Indian",
        "Fast Food"
        ],
        "avgRating": 4,
        "veg": true,
        "parentId": "311804",
        "avgRatingString": "4.0",
        "totalRatingsString": "227",
        "sla": {
        "deliveryTime": 48,
        "lastMileTravel": 13,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "13.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-08-23 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
                }
            ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
        }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-487668e3-6df3-4b6b-a795-75f600efcb21"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/blue-chilli-restaurant-ambedkar-nagar-prasia-road-rest522144",
        "type": "WEBLINK"
    }
    }
]

const Cards2=({Res})=>{
    return(
        <div className='res-card'>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+Res.info.cloudinaryImageId}/>
            <div className='textpart'>
                <h3>{Res.info.name}</h3>
                <h3>{Res.info.avgRating} , {Res.info.sla.slaString}</h3>
                <p>{Res.info.cuisines.join(",")}</p>
            </div>
        </div>
    )
}
//Destructuring 
const Cards3=({Res})=>{
    const {name,avgRating,sla,cuisines}=Res.info;
    return(
        <div className='res-card'>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+Res.info.cloudinaryImageId}/>
            <div className='textpart'>
                <h3>{name}</h3>
                <h3>{avgRating} ☆ , {sla.slaString}</h3>
                <p>{cuisines.join(",")}</p>
            </div>
        </div>
    )
}


const Body=()=>(
    <div id="body">
        <br/>
        <div className='search-bar'>
            <input type="text" placeholder='Enter Food-Items' className='search'/>
            <button>Search</button>
        </div>
        <div className='res-container'>
            {/* <ResCard/>
            <Cards TextOnimg="Kuchh bhi" ResName="Adil Hotel" RateTime="4.4 , 35 -40 mins" Cuisines="Biryani,tandoor,chhindwara Locality" />
            <Cards1 TextOnimg="100 F ABOVE 999" ResName="Gupta Bhojnalay" RateTime="4.1 , 35 -40 mins" Cuisines="Fast Food,Indian, Beverages" />
            <Cards2  Res={restaurants[0]} /> */}

            {
                restaurants.map((resty)=>
                (
                    <Cards3 key={resty.info.id} Res={resty}/>
                ))
            }

            {/* {ResCard2('Hotel Sai Nath','175 OFF ABOVE 699','4.2 , 35-40 mins' , 'North Indian, South Indian')}
            {ResCard2('Raimens Cafe 79','df','4.4 , 45-50 mins','Bakery,Pizzas,Snakes')} */}
        </div>
    </div>
)

const MainApp=()=>(
    <div id="container">
        <Header/>
        <Body/>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp/>);