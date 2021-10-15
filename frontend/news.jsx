import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

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
  const [newsArticle, setNewsArticle] = useState(null);
  const [newsLink, setNewsLink] = useState(null);
  const [newsThumbnail, setNewsThumbnail] = useState(null);

  const getNews = () => {
    axios.request(options).then((res) => {
      console.log(res.data.value[0]);
      setNewsTitle(res.data.value[0].name);
      setNewsArticle(res.data.value[0].description);
      setNewsLink(res.data.value[0].url);
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Card className="news card" id="medium-card">
      <Card.Body>
        <Card.Title className="news-header">Today's News</Card.Title>
        <article className="news-article">
          <Card.Img
            className="news-image"
            src="https://www.bing.com/th?id=OVFT.LX5GIRNThAlgN4_zb7FNNi&pid=News"
            alt="News Thumbnail"
          ></Card.Img>

          <Card.Text className="news-title">{newsTitle}</Card.Text>
          <Card.Text className="news-body">
            {newsArticle}...{" "}
            <Card.Link className="news-link" href={newsLink} target="_blank">
              Read full article
            </Card.Link>
          </Card.Text>
        </article>
      </Card.Body>
    </Card>
  );
};

export default News;
