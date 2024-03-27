import { useEffect, useState } from "react";
import {LinkComponent} from "../../js/index";

const NavSingleWork = (props) => {
    const {postsData, postContent, changeRoute} = props;
    const [postsUrl, setPostsUrl] = useState();

    const getPostsIndexes = () => {
        const currentIndex = postsData.findIndex((post) => post.id === postContent.id);
        const previousIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : null;
        const nextIndex = currentIndex + 1 < postsData.length ? currentIndex + 1 : null;
   
        setPostsUrl({
            previous: previousIndex !== null ? `/work/${postsData[previousIndex].slug}` : null,
            next: nextIndex !== null ? `/work/${postsData[nextIndex].slug}` : null,
        });
    }

    useEffect(() => {
        getPostsIndexes();
    },[postContent])
    
    return <>
        {
            postsData && postsUrl && (
                <nav className="single-work__nav">
                    <div className="single-work__nav-item">
                        <LinkComponent to={postsUrl.previous} className={`${!postsUrl.previous ? "hidden" : "link link--single-work link--tr-swapping"}`} changeRoute={changeRoute}>
                            <p className="single-work__nav-text swapping--frst-child">Prev project</p>
                            <p className="single-work__nav-text--on-hover swapping--scnd-child">Prev project</p>
                        </LinkComponent>
                    </div>
                    <div className="single-work__nav-item">
                        <LinkComponent to={postsUrl.next} className={`${!postsUrl.next ? "hidden" : "link link--single-work link--tr-swapping"}`} changeRoute={changeRoute}>
                            <p className="single-work__nav-text swapping--frst-child">Next project</p>
                            <p className="single-work__nav-text--on-hover swapping--scnd-child">Next project</p>
                        </LinkComponent>
                    </div>
                </nav>
            )
        }
    </>
}

export default NavSingleWork;