import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";


const Weather = () => {
  // const [coords, setCoords] = useState(null)
  // const coords = navigator.geolocation.getCurrentPosition;

  var options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: "q=53.2734, -7.77832031" },
    headers: {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "cea3f490acmshc761a76968cd96cp1b362ejsn0742e741fccd",
    },
  };

  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    axios.request(options).then(res => {
      setWeather(res.data.current.condition.text);
    });
  }
  
  useEffect(() => (
    getWeather()
  ), [])

  return (
    <div>
      <Card className="weather card">Today's Weather is:{weather}</Card>
    </div>
  );
};

export default Weather;
