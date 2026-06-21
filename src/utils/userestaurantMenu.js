import { useEffect, useState } from "react";
import restaurantData from "./restaurantData.json";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRestaurant(restaurantData[resId] || null);
    }, 300);
    return () => clearTimeout(timer);
  }, [resId]);

  return restaurant;
};

export default useRestaurantMenu;
