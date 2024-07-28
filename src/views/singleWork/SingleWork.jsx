import { useParams } from "react-router-dom";
import { NavSingleWork, useSingleWork } from "../../js/index";
import LazyImage from "../../components/lazyImage/LazyImage";

const SingleWork = (props) => {
    const {postsData, mediaData, contentRef, pageLoading, changeRoute} = props;
    const {slug} = useParams();
    const {postContent} = useSingleWork(postsData, slug)

    return <>
        {
            postContent && mediaData && (
                <article className={`single-work ${pageLoading ? "" : "ldd"}`} ref={contentRef}>
                        <header className="header--article single-work__header">
                            <h3>{postContent.acf.serie_cover.description.title}</h3>
                            <p>{postContent.acf.serie_cover.description.year}</p>
                        </header>
                        
                        <main className="single-work__main">
                            <ul className="single-work__list">
                                {postContent.acf.single_work.map((el,i) => {

                                    const imageUrl = el.image;

                                    return <li key={i} className="single-work__list-item">
                                        
                                        <LazyImage imageUrl={imageUrl} mediaData={mediaData} page="single-work"/>
                                        
                                        <figcaption className="single-work__list-item-fig-caption">
                                            <p className="single-work__list-item-title">{el.info.title}</p>
                                            {el.info.description && <p className="single-work__list-item-description">{el.info.description}</p>}
                                            {el.info.size && <p className="single-work__list-item-size">{el.info.size}</p>}
                                        </figcaption>
                                    </li>
                                })}
                            </ul>

                            {postContent.acf.serie_description.text && (
                                <div className="single-work__description">
                                    <div className="single-work__description-header">
                                        <div className="single-work__description-location">
                                            <p>{postContent.acf.serie_description.location.city}</p>
                                            <p>{postContent.acf.serie_description.location.country}</p>
                                        </div>

                                        <div className="single-work__description-date">
                                            <p>{postContent.acf.serie_description.date}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="single-work__description-text">
                                        {postContent.acf.serie_description.text.split('\r\n\r\n').map((p, index) => (
                                            <p key={index} className="tt--none">{p}</p>
                                        ))}
                                    </div>

                                    {postContent.acf.serie_description.signature.author && postContent.acf.serie_description.signature.year &&
                                        <div className="single-work__description-author">
                                            <p>{postContent.acf.serie_description.signature.author},</p>
                                            <p>{postContent.acf.serie_description.signature.year}</p>
                                        </div>
                                    }
                                    
                                </div>
                            )}
                        </main>
                        <NavSingleWork postsData={postsData} postContent={postContent} changeRoute={changeRoute}/>
                    </article> 
            )
        }
    </>
}

export default SingleWork;
