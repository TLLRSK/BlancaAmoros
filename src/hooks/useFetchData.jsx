import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const rootUrl = "https://www.blancaamoros.com/shop/wp-json/wp/v2";

const fetchPosts = async () => {
  const url = `${rootUrl}/posts`;
  const response = await axios.get(url);
  return response.data;
};

const fetchSiteData = async () => {
  const pages = ["home", "contact", "about", "impressum"];
  const pagePromises = pages.map(async page => {
    const url = `${rootUrl}/pages?slug=${page}`;
    const response = await axios.get(url);
    return { [response.data[0].slug]: response.data[0] };
  });

  const pageDataArray = await Promise.all(pagePromises);
  return Object.assign({}, ...pageDataArray);
};

const fetchMediaData = async () => {
  const perPage = 100;
  let allMediaData = [];
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

  return allMediaData;
};

const useFetchData = () => {
  const postsQuery = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });
  const siteDataQuery = useQuery({ queryKey: ['siteData'], queryFn: fetchSiteData });
  const mediaDataQuery = useQuery({ queryKey: ['mediaData'], queryFn: fetchMediaData });

  return {
    siteData: siteDataQuery.data,
    postsData: postsQuery.data,
    mediaData: mediaDataQuery.data,
    isLoading: postsQuery.isLoading || siteDataQuery.isLoading || mediaDataQuery.isLoading,
    isError: postsQuery.isError || siteDataQuery.isError || mediaDataQuery.isError,
  };
};

export default useFetchData;