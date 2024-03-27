import { Route, Routes } from 'react-router-dom';
import {Nav, Footer, LoadingScreen, Home, About, Contact, SingleWork, useFetchData, usePageTransition, Impressum } from '../src/js/index';
import './scss/style.scss';

function App() {
  const {siteData, postsData, mediaData} = useFetchData();
  const { location, isLoading, contentRef, changeRoute, firstLoad, setFirstLoad } = usePageTransition();

  return (
    <>
    <Nav
      location={location}
      postsData={postsData}
      changeRoute={changeRoute}
      firstLoad={firstLoad}
    />
    {
      firstLoad && (
        <LoadingScreen
        postsData={postsData}
        siteData={siteData}
        mediaData={mediaData}
        isLoading={isLoading}
        setFirstLoad={setFirstLoad}/>
      )
    }
    
    <Routes>
      <Route path="/" element={
        siteData && siteData.home && (
          <Home 
            pageData={siteData.home}
            mediaData={mediaData} 
            contentRef={contentRef} 
            postsData={postsData}
            changeRoute={changeRoute}
            isLoading={isLoading}
          />
        )
      }
      />

      <Route path="/about" element={
        siteData && siteData.about && (
          <About
            pageData={siteData.about}
            mediaData={mediaData}
            contentRef={contentRef}
            isLoading={isLoading}
          />
        )
      }/>
      <Route path="/contact" 
        element={
          siteData && siteData.contact && (
            <Contact 
              pageData={siteData.contact}
              contentRef={contentRef}
              isLoading={isLoading}
              changeRoute={changeRoute}
            />
          )
        }
      />
      <Route path="/impressum" 
        element={
          siteData && siteData.impressum && (
            <Impressum 
              pageData={siteData.impressum}
              contentRef={contentRef}
              isLoading={isLoading}
            />
          )
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
            isLoading={isLoading}
          />
        }
      />
    </Routes>
    
    {
      siteData && siteData.home && (
        <Footer
        footerData={siteData.home.acf}
        isLoading={isLoading}
        location={location}/>
      )
    }
    </>
  );
}

export default App;

