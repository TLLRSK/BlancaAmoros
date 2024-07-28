import {AboutListContainer, AboutShowsList } from "../../js/index";
import getImage from "../../js/utils";
const About = (props) => {
    const {pageData, mediaData, contentRef, pageLoading} = props;

    return <>
        {
            pageData && mediaData && (
                <section className={`about ${pageLoading ? "" : "ldd"}`} ref={contentRef}>
                    <header className="header--section about__header"> 
                        <div className="about__bio-grid">
                            <p className="about__bio-grid-item--name">{pageData.acf.bio.name}</p>
                            <p className="about__bio-grid-item--year">{pageData.acf.bio.year}</p>

                            <div className="about__bio-grid-item--location">
                                <p>{pageData.acf.bio.location.city},</p>
                                <p>{pageData.acf.bio.location.country}</p>
                            </div>
                        </div>
                    </header>
                    
                    <main className="about__main">
                        <img 
                            src={getImage(pageData.acf.bio.portrait, mediaData)?.source_url}
                            srcSet={`
                                  ${getImage(pageData.acf.bio.portrait, mediaData)?.media_details.sizes.thumbnail.source_url} 360w,
                                  ${getImage(pageData.acf.bio.portrait, mediaData)?.media_details.sizes.medium.source_url} 720w,
                                  ${getImage(pageData.acf.bio.portrait, mediaData)?.source_url} 1200w
                                `}
                            alt={getImage(pageData.acf.bio.portrait)?.text_alt}
                            className="img--about"
                        />
                        
                        <AboutListContainer pageData={pageData} listName={'education'}/>

                        <AboutShowsList pageData={pageData}/>

                        <AboutListContainer pageData={pageData} listName={'others'}/>
                        
                    </main>
                </section>
            )
        }
    </>
  };
  
  export default About;
