import React, { useState, useEfect, useEffect} from "react";
import axios from "axios";

const FunFact = () => {

  const [fact, setFact] = useState(null)

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
  }, [])


  return <div className="fun-fact card">Today's Fun Fact is: {fact}</div>;
};

export default FunFact;
