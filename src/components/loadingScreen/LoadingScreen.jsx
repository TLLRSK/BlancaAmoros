import { useEffect, useState } from "react";

const LoadingScreen = (props) => {
  const {postsData, mediaData, siteData, setFirstLoad} = props;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const titleString = "Blanca Amorós";
  const titleArr = titleString.split(' ').map(word => word.split(''));
  
  // Displaying title words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevCount) => {
        const newCount = prevCount + 1;

        if (newCount >= titleArr.length) {
          setIsLoaded(true);
          clearInterval(interval);
        }

        return newCount;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const closeLoadingScreen = () => {
    if (currentWordIndex === titleArr.length) {
      return setTimeout(() => {
        setIsClosing(true)
        setTimeout(() => {
          setFirstLoad(false);
        }, 600)
      }, 500)
    }
  }

  useEffect(() => {
    postsData && siteData && mediaData && isLoaded && closeLoadingScreen();

  }, [postsData, siteData, mediaData, isLoaded])
  
  return (
    <div className={`loading-screen`}>
      <main>
        <div className="loading-screen__title">
          { titleArr.map((word, i) => {
            return (
              <SingleWord key={i} wordIndex={i} word={word} currentWordIndex={currentWordIndex} isClosing={isClosing}/>
            )
          }) }
        </div>
      </main>
    </div>
  );
};

const SingleWord = (props) => {
  const {word, wordIndex, currentWordIndex, isClosing} = props;
  const [charCount, setCharCount] = useState(0);

  // Displaying title chars
  useEffect(() => {
    if ((wordIndex) <= currentWordIndex) {

      const interval = setInterval(() => {
        setCharCount((prevCount) => {
          const newCount = prevCount + 1;
  
          if (newCount >= word.length) {
            clearInterval(interval);
          }
  
          return newCount;
        });
      }, 50);
  
      return () => clearInterval(interval);
    }
  }, [currentWordIndex]);

  return <>
    <div className="loading-screen__word">

      { word.map((char, i) => {
        return (
          <SingleChar char={char} key={i} wordIndex={wordIndex} currentWordIndex={currentWordIndex} charIndex={i} charCount={charCount} isClosing={isClosing}/>
        )
      })}

    </div>
    
  </>
}

const SingleChar = (props) => {
  const {char, charIndex, charCount, isClosing} = props;
  
  return <>
    <p className={`loading-screen__char ${charIndex < charCount ? "ldd" : ""} ${isClosing ? "clsng" : ""}`}>
      {char}
    </p>
  </>
}

export default LoadingScreen;
