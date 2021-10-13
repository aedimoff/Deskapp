import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import regeneratorRuntime from "regenerator-runtime";
import { BsSun } from "react-icons/bs";
import { RiMistLine, RiCloudLine } from "react-icons/ri";
import { WiRain, WiDayCloudy } from "react-icons/wi";

const Weather = () => {
  // const [coords, setCoords] = useState(null)
  // const coords = navigator.geolocation.getCurrentPosition;

  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  const getWeather = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
          const options = {
            method: "GET",
            url: "https://weatherapi-com.p.rapidapi.com/current.json",
            params: { q: `q=${pos.coords.latitude}, ${pos.coords.longitude}` },
            headers: {
              "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
              "x-rapidapi-key":
                "cea3f490acmshc761a76968cd96cp1b362ejsn0742e741fccd",
            },
          };
      axios.request(options).then((res) => {
        setWeather(res.data.current.condition.text);
        setTemp(res.data.current.temp_f);
      });
    });
  };


  const weatherIcons = {
    "Sunny": <BsSun />,
    "Clear": <BsSun />,
    "Mist": <RiMistLine />,
    "Partly cloudy": <WiDayCloudy />,
    "Light rain": <WiRain />,
    "Rain": <WiRain />,
    "Overcast": <RiCloudLine />,
  };

  useEffect(() => (getWeather()), []);

  return (
    <div>
      <Card
        className="weather card"
        style={{ height: "20rem" }}
      >
        <Card.Body>
          <Card.Header>Your Weather Report</Card.Header>
          <Card.Text>
            {weather} {temp}
          </Card.Text>
          <Card.Text>{weatherIcons[weather]}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Weather;
