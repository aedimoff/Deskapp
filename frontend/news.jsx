import React, { setState } from "react";
// import axios from "axios";

const News = () => {
  // const [news, setNews] = setState;

  // let newsItem = axios
  //   .request({
  //     method: "GET",
  //     url: "https://bing-news-search1.p.rapidapi.com/news/trendingtopics",
  //     params: { safeSearch: "Off", textFormat: "Raw" },
  //     headers: {
  //       "x-bingapis-sdk": "true",
  //       "x-rapidapi-key": "cea3f490acmshc761a76968cd96cp1b362ejsn0742e741fccd",
  //       "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  //     },
  //   })
  //   .then((res) => setNews(res));

  // console.log(news);

  return <div className="news card">Today's News is:</div>;
};

export default News;


//do the axios call in a non-react class
//render non-react class in this component
//this was done in Willow when you were trying to put Markers in