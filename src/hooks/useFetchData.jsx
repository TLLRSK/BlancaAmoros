import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = () => {
    const [siteData, setSiteData] = useState(null);
    const [postsData, setPostsData] = useState(null);
    const [mediaData, setMediaData] = useState(null);
  
    // Fetching all posts
    const fetchPosts = async() => {
      try {
        const response = await fetch(`https://www.blancaamoros.com/shop/wp-json/wp/v2/posts`);
        const data = await response.json();
        return await setPostsData(data);
      } catch(error) {
        throw("Error fetching posts data.")
      }
    };
    
    // Fetching pages data
    const fetchSiteData = async() => {
      const pages = ["home", "contact", "about", "impressum"];
  
      try {
        const pagePromises = pages.map(async (page) => {
          const response = await fetch(`https://www.blancaamoros.com/shop/wp-json/wp/v2/pages?slug=${page}`);
          const data = await response.json();
          return { [data[0].slug]: data[0] };
        });
  
        const pageDataArray = await Promise.all(pagePromises);
  
        const pageObj = Object.assign({}, ...pageDataArray);
      
        setSiteData(pageObj);
        
      } catch (error) {
        console.error("Error fetching page content:", error);
      }
    }
  
    // Fetching images data
    const fetchMediaData = async () => {
      try {
        const response = await axios.get("https://www.blancaamoros.com/shop/wp-json/wp/v2/media?per_page=100");
        const data = response.data;
        setMediaData(data.length > 0 ? data : null);
      } catch (error) {
        console.error("Error fetching media:", error);
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