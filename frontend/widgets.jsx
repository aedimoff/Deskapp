import React from "react";
import Clock from "./clock";
import News from "./news";
import Tasks from "./tasks";
import Weather from "./weather";
import FunFact from "./funfact";

const tabs = [
  { title: "Mon", content: [] },
  { title: "Tues", content: [] },
  { title: "Wed", content: [] },
  { title: "Thurs", content: [] },
  { title: "Fri", content: [] },
];

const Widgets = () => {
  return (
    <div className="main">
      <h1 className="welcome-header">Welcome to your day!</h1>
      <div className="widgets">
        <Clock />
        <News />
        <Tasks tabs={tabs} />
        <Weather />
        <FunFact />
      </div>
    </div>
  );
};

export default Widgets;
