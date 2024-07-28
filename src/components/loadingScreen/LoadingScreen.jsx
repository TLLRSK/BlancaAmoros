import { useEffect, useState } from "react";
import { useFetchData } from "../../js";

const LoadingScreen = () => {
  const {postsData, mediaData, siteData} = useFetchData();
  const [isLoading, setIsLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    console.log("loading page")
  }, [])

  useEffect(() => {
    if (postsData && mediaData && siteData) {
      setIsLoading(false);
      setIsClosing(true);
    }
  }, [postsData, mediaData, siteData]);

  return (
    <div className="loading-screen">
        <h2 className={`${isLoading ? "loading-screen__title loading" : isClosing ? "loading-screen__title closing" : "loading-screen__title"}`}>Blanca Amorós</h2>
    </div>
  );
};


export default LoadingScreen;
