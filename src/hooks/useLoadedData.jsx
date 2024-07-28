import { useEffect, useState } from "react";
import useFetchData from "./useFetchData";

const useLoadedData = () => {
    const [loadedData, setLoadedData] = useState(false);
    const {postsData, mediaData, siteData} = useFetchData();
    
    useEffect(() => {
        postsData && mediaData && siteData && setLoadedData(true);
    }, [postsData, mediaData, siteData])

    return {loadedData};
}

export default useLoadedData;