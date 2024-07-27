import { LazyLoadImage } from "react-lazy-load-image-component";
import getImage from "../../js/utils";

const LazyImage = (props) => {
    const {imageUrl, mediaData, page} = props;
    
    const thumbnail = getImage(imageUrl, mediaData)?.media_details?.sizes?.thumbnail?.source_url;
    const medium =getImage(imageUrl, mediaData).media_details?.sizes?.medium?.source_url;
    const large =getImage(imageUrl, mediaData).media_details?.sizes?.large?.source_url;
    const full = getImage(imageUrl, mediaData)?.source_url;


    const getClassName = (page) => {
        switch(page) {
            case "home":
                return "img--home";
            case "single-work":
                return "img--single-work";
            default:
                return "img";
        }
    }

    const srcSet = [
        thumbnail && `${thumbnail} 360w,`,
        medium && `${medium} 720w,`,
        large && `${large} 1280w,` && `${full} 1280w,`,
        full && `${full} 1920w,`
    ].join(' ')

    const commonProps = {
        src: medium,
        srcSet: srcSet,
        alt: getImage(imageUrl, mediaData)?.alt_text || "",
        className: getClassName(page),
        threshold: 1200,
        placeholderSrc: thumbnail,
    }

    if (page === 'single-work') {
        commonProps.onClick = (() => window.open(full));
    }
    
    return <figure className="img__container">
        <LazyLoadImage {...commonProps}/>
    </figure>
}

export default LazyImage;