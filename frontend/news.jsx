import axios from "axios";
import React, { useState, useEffect } from "react";

const News = () => {

  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news",
    params: { count: "1", safeSearch: "Moderate", textFormat: "Raw" },
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "cea3f490acmshc761a76968cd96cp1b362ejsn0742e741fccd",
    },
  };

  const [newsTitle, setNewsTitle] = useState(null);
  const [newsLink, setNewsLink] = useState(null);

  const getNews = () => {
    axios.request(options).then(res => {
      setNewsTitle(res.data.value[0].name);
      setNewsLink(res.data.value[0].url)
    })
  }

  useEffect(() =>{
    getNews()
  }, []);

  return <div className="news card">
    Today's News is: {newsTitle} 
    <a href={newsLink} target="_blank">Read full article</a>
  </div>;
};

export default News;


