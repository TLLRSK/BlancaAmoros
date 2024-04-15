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

    const fetchMediaData = async () => {
      const perPage = 100;
      let allMediaData = [];
    
      try {
        let page = 1;
        let totalPages = 1;
    
        while (page <= totalPages) {
          const url = `${rootUrl}/media?per_page=${perPage}&page=${page}`;
          const response = await axios.get(url);
    
          if (response.data.length > 0) {
            allMediaData = [...allMediaData, ...response.data];
            totalPages = response.headers['x-wp-totalpages'];
            page++;
          } else {
            break;
          }
        }
    
        if (allMediaData.length > 0) {
          setMediaData(allMediaData);
        } else {
          setMediaData(null);
        }
      } catch (error) {
        console.error('Error fetching media data:', error);
        setMediaData(null);
      }
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