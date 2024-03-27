import { useEffect, useState } from "react";

const useNav = (location) => {

  const [scrollY, setScrollY] = useState(0);
  const [visibleNav, setVisibleNav] = useState(false);

  const handleScrollY = () => {
      setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollY);
      
      return () => {
        window.removeEventListener('scroll', handleScrollY);
      };
  }, [])

  useEffect(() => {
    location.pathname === "/" && scrollY >= 100 && !visibleNav ? setVisibleNav(true) :
    location.pathname !== "/" && !visibleNav ? setVisibleNav (true) : null;
  }, [scrollY]);

  return {scrollY, visibleNav};
}

export default useNav;