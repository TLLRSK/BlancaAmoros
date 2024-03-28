import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import getImage from "../../js/utils";

const Home = (props) => {
  const {pageData, postsData, mediaData, contentRef, isLoading, changeRoute} = props;
 

  return <>
    {
      postsData && mediaData && (
        <>
        <header className={`header--section home__header ${isLoading ? "" : "ldd"}`}>
          <div className="home__header-row">
            <h1 className="home__header-title">Blanca Amorós</h1>

            <div className="home__header-location">
              <p>{pageData.acf.location.city}</p>
              <span>-</span>
              <p>{pageData.acf.location.country}</p>
            </div>
          </div>

          <h2 className="home__header-subtitle">Selected works</h2>
        </header>
        
        <article className={`home ${isLoading ? "" : "ldd"}`} ref={contentRef}>
            <main>
              <ul className="home__work-list">
                {postsData.map((post, i) => {
                  const thumbnail = getImage(post.acf.serie_cover.image, mediaData)?.media_details?.sizes?.thumbnail?.source_url;
                  const medium = getImage(post.acf.serie_cover.image, mediaData)?.media_details?.sizes?.medium?.source_url;
                  const large = getImage(post.acf.serie_cover.image, mediaData)?.media_details?.sizes?.large?.source_url;

                  return (
                    <li key={post.id} className="home__work-list-item">
        
                      <Link key={post.id} to={`/work/${post.slug}`} className="link" onClick={(e) => changeRoute(e, `/work/${post.slug}`)}>
        
                        <div className="home__work-list-item-figure img__container--home">

                          <LazyLoadImage
                            src={getImage(post.acf.serie_cover.image, mediaData)?.source_url}
                            srcSet={`
                              ${thumbnail} 360w,
                              ${medium} 720w,
                              ${large} 1280w
                            `}
                            alt={getImage(post.acf.serie_cover.image)?.alt_text || ""}
                            className="img--home"
                            threshold={200}
                            // placeholderSrc={thumbnail}
                          />
                          
                          <figcaption className="home__work-list-item-figcaption">
                            <span className="home__work-list-item-index">{`${i < 10 ? "0" + (i+1) : (i+1)}`}</span>
                            <p className="home__work-list-item-title">{post.acf.serie_cover.description.title}</p>
                            <p className="home__work-list-item-year">{post.acf.serie_cover.description.year}</p>
                          </figcaption>
                      
                        </div>
        
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </main>
        </article>
        </>
      )
    }
    
  </>
};

export default Home;