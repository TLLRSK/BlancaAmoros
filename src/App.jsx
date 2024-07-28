import { Route, Routes } from 'react-router-dom';
import {Nav, Footer, LoadingScreen, Home, About, Contact, SingleWork, useFetchData, usePageTransition, Impressum } from '../src/js/index';
import './scss/style.scss';

function App() {
  const { siteData, postsData, mediaData, isLoading, isError } = useFetchData();
  const { location, contentRef, pageLoading, changeRoute } = usePageTransition();

  if (isLoading) {
    return <LoadingScreen
    postsData={postsData}
    siteData={siteData}
    mediaData={mediaData}
    isLoading={isLoading}/>;
  } 

  if (isError) return <div>An error occurred</div>;

  return (
    <>
      <Nav
        location={location}
        postsData={postsData}
        changeRoute={changeRoute}
      />  
      
      <Routes>
        <Route path="/" 
          element={
            <Home 
              pageData={siteData.home}
              mediaData={mediaData} 
              contentRef={contentRef} 
              postsData={postsData}
              changeRoute={changeRoute}
              pageLoading={pageLoading}
            />
          }
        />

        <Route path="/about"
          element={
            <About
              pageData={siteData.about}
              mediaData={mediaData}
              contentRef={contentRef}
              pageLoading={pageLoading}
            />
          }
        />
        
        <Route path="/contact" 
          element={
            <Contact 
              pageData={siteData.contact}
              contentRef={contentRef}
              pageLoading={pageLoading}
              changeRoute={changeRoute}
            />
          }
        />
        <Route path="/impressum" 
          element={
            <Impressum 
              pageData={siteData.impressum}
              contentRef={contentRef}
              pageLoading={pageLoading}
            />
          }
        />
        <Route  
          path="/work/:slug" 
          element={
            <SingleWork 
              postsData={postsData}
              mediaData={mediaData}
              contentRef={contentRef}
              changeRoute={changeRoute}
              pageLoading={pageLoading}
            />
          }
        />
      </Routes>
      
      <Footer
        footerData={siteData.home.acf}
        pageLoading={pageLoading}
        location={location}
      />
    </>
  );
}

export default App;

