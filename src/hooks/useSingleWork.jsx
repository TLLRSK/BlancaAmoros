import { useEffect, useState } from "react";

const useSingleWork = (postsData, slug) => {
    const [postContent, setPostContent] = useState(null);

    let postData = () => {
        const post = postsData.find(post => post.slug == slug);
        return post;
    }
    
    useEffect(() => {
        postsData && slug && setPostContent(postData());
    }, [slug, postsData]);

    return {postContent}
}

export default useSingleWork