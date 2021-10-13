import React, { useState, useEfect, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const FunFact = () => {
  const [fact, setFact] = useState(null);

  const options = {
    method: "GET",
    url: "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts",
    headers: {
      "x-rapidapi-host": "facts-by-api-ninjas.p.rapidapi.com",
      "x-rapidapi-key": "cea3f490acmshc761a76968cd96cp1b362ejsn0742e741fccd",
    },
  };

  useEffect(() => {
    axios.request(options).then((res) => {
      setFact(res.data[0].fact);
    });
  }, []);

  return (
    <Card className="fun-fact card" id="small-card">
      <Card.Body>
        <Card.Header>Today's Fun Fact:</Card.Header>
        <Card.Text>{fact}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FunFact;
