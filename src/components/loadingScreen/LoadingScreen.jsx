import { useEffect, useState } from "react";

const LoadingScreen = (props) => {
  const { isLoading } = props;
  const [ screenState, setScreenState ] = useState('loading');

  useEffect(() => {
    console.log(isLoading)
    switch(isLoading) {
      case true:
        setTimeout(() => {
          setScreenState('opening');
        }, 100)
        break;
      case false:
        setScreenState('closing');
        break;
      default:
        return;
    }
  }, [isLoading]);

  return (
    <div className="loading-screen">
        <h2 className={`${screenState === 'opening' ? "loading-screen__title loading" : screenState === 'closing' ? " loading-screen__title closing" : "loading-screen__title"}`}>Blanca Amorós</h2>
    </div>
  );
};


export default LoadingScreen;
