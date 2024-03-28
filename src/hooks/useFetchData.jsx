import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = () => {
    const [siteData, setSiteData] = useState(null);
    const [postsData, setPostsData] = useState(null);
    const [mediaData, setMediaData] = useState(null);
    const rootUrl = "https://www.blancaamoros.com/shop/wp-json/wp/v2";
  
    // Fetching all posts
    const fetchPosts = async() => {
        const url = `${rootUrl}/posts`

        axios.get(url)
          .then(response => setPostsData(response.data))
          .catch(error => console.error('Error fetching posts data:', error));
    };
    
    // Fetching pages data
    const fetchSiteData = async() => {
      const pages = ["home", "contact", "about", "impressum"];

        const pagePromises = pages.map(page => {
          const url = `${rootUrl}/pages?slug=${page}`

          return axios.get(url)
            .then(response => ({ [response.data[0].slug]: response.data[0] }))
            .catch(error => console.error('Error fetching site data:', error));
        });
  
        const pageDataArray = await Promise.all(pagePromises);
  
        const pageObj = Object.assign({}, ...pageDataArray);
      
        setSiteData(pageObj);
    }
  
    // Fetching images data
    const fetchMediaData = async () => {
      const url = `${rootUrl}/media?per_page=100`

      axios.get(url)
        .then(response => setMediaData(response.data.length > 0 ? response.data : null))
        .catch(error => console.error('Error fetching media data:', error));
    };
  
    // Calling back fetch functions
    useEffect(() => {
      fetchPosts();
      fetchMediaData();
      fetchSiteData();
    },[])
  
    return {
      siteData,
      postsData,
      mediaData
    };
  }

  export default useFetchData;