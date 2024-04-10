import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const usePageTransition = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle section visibility
  const changeSectionVisibility = () => {
    if (contentRef.current) {
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    }
  };

  // Changing route
  const changeRoute = (e, to) => {
    console.log("changing route")
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log("navigating")
      window.scrollTo(0, 0);
      navigate(to);
      changeSectionVisibility();
    }, 400);
  };

  useEffect(() => {
    changeSectionVisibility();
  }, [contentRef.current, firstLoad]);

  return { location, isLoading, contentRef, changeRoute, firstLoad, setFirstLoad };
};

export default usePageTransition;