import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useLoadedData from './useLoadedData';

const usePageTransition = () => {
  const {loadedData } = useLoadedData();
  const [pageLoading, setPageLoading] = useState(true);
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Changing route
  const changeRoute = (e, to) => {
    e.preventDefault();
    setPageLoading(true);
    setTimeout(() => {
      window.scrollTo(0, 0);
      navigate(to);
      changeSectionVisibility();
    }, 400);
  };

  // Toggle section visibility
  const changeSectionVisibility = () => {
    if (contentRef.current) {
      setTimeout(() => {
        setPageLoading(false);
      }, 400);
    }
  };

  useEffect(() => {
    loadedData && setTimeout(() => {
      setPageLoading(false);
    }, 600);
  }, [loadedData]);

  useEffect(() => {
    changeSectionVisibility();
  }, [contentRef.current]);

  return { location, pageLoading, contentRef, changeRoute };
};

export default usePageTransition;