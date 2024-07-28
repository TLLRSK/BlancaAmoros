import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import getImage from "../../js/utils";
import useLoadedData from "../../hooks/useLoadedData";

const LazyImage = (props) => {
    const {imageUrl, page} = props;
    const {mediaData} = useLoadedData();
    
    const thumbnail = getImage(imageUrl, mediaData)?.media_details?.sizes?.thumbnail?.source_url;
    const medium =getImage(imageUrl, mediaData).media_details?.sizes?.medium?.source_url;
    const large =getImage(imageUrl, mediaData).media_details?.sizes?.large?.source_url;
    const full = getImage(imageUrl, mediaData)?.source_url;
    const woocommerceSingle = getImage(imageUrl, mediaData)?.media_details?.sizes?.woocommerce_single?.source_url;

    const getClassName = () => {
        switch(page) {
            case "home":
                return `img--home`;
            case "single-work":
                return `img--single-work`;
            default:
                return "img";
        }
    }

    const getContainerClassName = () => {
        switch(page) {
            case "home":
                return `img__container--home`;
            default:
                return "img__container";
        }
    }

    const getSrcSet = () => {
        switch(page) {
            case "home":
                return [
                    thumbnail && `${thumbnail} 360w,`,
                    medium && `${medium} 720w,`,
                    large && `${large} 1280w,`,
                ];
            case "single-work":
                return [
                    thumbnail && `${thumbnail} 360w,`,
                    medium && `${medium} 720w,`,
                    woocommerceSingle && `${woocommerceSingle} 1280w,`,
                ];
        }
    }

    const commonProps = {
        src: full,
        srcSet: getSrcSet(),
        alt: getImage(imageUrl, mediaData)?.alt_text || "",
        className: getClassName(page),
        threshold: 800,
        effect: 'opacity',
        wrapperClassName: getContainerClassName(),
        wrapperProps:{
            style: {transition: "opacity .4s ease-in-out"},
        },
    }

    if (page === 'single-work') {
        commonProps.onClick = (() => window.open(full));
    }
    
    return (
            <LazyLoadImage {...commonProps} key={imageUrl} />
    );
}

export default LazyImage;