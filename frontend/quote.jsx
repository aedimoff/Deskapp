import React, { useState, useEfect, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  const options = {
    method: "GET",
    url: "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote",
    params: { token: "ipworld.info" },
    headers: {
      "x-rapidapi-host":
        "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
      "x-rapidapi-key": "cea3f490acmshc761a76968cd96cp1b362ejsn0742e741fccd",
    },
  };

  useEffect(() => {
    axios.request(options).then((res) => {
      setQuote(res.data.text);
      setAuthor(res.data.author);
    });
  }, []);

  return (
    <Card style={{ height: "15rem" }} className="quote card">
      <Card.Body>
        <Card.Title>Daily Inspiration</Card.Title>
        <Card.Text>{quote}</Card.Text>
        <Card.Text>~ {author}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Quote;
