import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { baseUrl } from "../utils/constants";

const useRestaurants = () => {
    const [ResList, setResList] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const observerRef = useRef(null);

    const fetchRestaurants = async (pageNum) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${baseUrl}/homePage/restaurent?page=${pageNum}`
            );
            const { restaurent, hasMore } = response.data;

            setResList((prevList) => [...prevList, ...restaurent]);
            setHasMore(hasMore);
            setError(null);
        } catch (err) {
            setError("Failed to load restaurants. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRestaurants(page);
    }, [page]);

    const lastCardRef = useCallback(
        (node) => {
            if (loading) return;

            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            console.log("check")
            observerRef.current = new IntersectionObserver((entries) => {   
                console.log("Intersecting:", entries[0].isIntersecting)
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prevPage) => prevPage + 1);
                }
            });

            if (node) {
                observerRef.current.observe(node);
            }
        },
        [loading, hasMore]
    );

    return { ResList,setResList, loading, error, hasMore, lastCardRef };
};

export default useRestaurants;