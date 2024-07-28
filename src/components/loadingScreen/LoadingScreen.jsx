import { useEffect, useState } from "react";
import useLoadedData from "../../hooks/useLoadedData";

const LoadingScreen = () => {
  const {loadedData} = useLoadedData();
  const [isLoading, setIsLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, [])

  useEffect(() => {
    if (loadedData) {
      setIsLoading(false);
      setIsClosing(true);
    }
  }, [useLoadedData]);

  return (
    <div className="loading-screen">
        <h2 className={`${isLoading ? "loading-screen__title loading" : isClosing ? "loading-screen__title closing" : "loading-screen__title"}`}>Blanca Amorós</h2>
    </div>
  );
};


export default LoadingScreen;
