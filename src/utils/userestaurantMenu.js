import { useEffect, useState } from "react";
import restaurantData from "./restaurantData.json";

// Returns flat restaurant object: { id, name, avgRating, totalRatings,
// costForTwo, cuisines, areaName, deliveryTime, image, menu: [{category, items: [...]}] }
const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // simulate async fetch so Shimmer still shows briefly
    const timer = setTimeout(() => {
      setRestaurant(restaurantData[resId] || null);
    }, 300);
    return () => clearTimeout(timer);
  }, [resId]);

  return restaurant;
};

export default useRestaurantMenu;
