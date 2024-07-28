import { Link } from "react-router-dom";
import LazyImage from "../../components/lazyImage/LazyImage";
import useLoadedData from "../../hooks/useLoadedData";

const Home = (props) => {
  const {pageData, contentRef, pageLoading, changeRoute} = props;
  const {postsData} = useLoadedData();

  return <>
    <header className={`header--section home__header ${pageLoading ? "" : "ldd"}`}>
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
    
    <article className={`home ${pageLoading ? "" : "ldd"}`} ref={contentRef}>
      <main>
        <ul className="home__work-list">
          {postsData.map((post, i) => {
            const imageUrl = post.acf.serie_cover.image;

            return (
              <li key={post.id} className="home__work-list-item">
  
                <Link key={post.id} to={`/work/${post.slug}`} className="link" onClick={(e) => changeRoute(e, `/work/${post.slug}`)}>
  
                  <div className="home__work-list-item-figure img__container--home">

                    <LazyImage imageUrl={imageUrl} page="home"/>
                    
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
};

export default Home;