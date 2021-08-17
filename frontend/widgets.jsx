import React from "react";
import Clock from "./clock";
import News from "./news";
import Tasks from "./tasks";
import Weather from "./weather";
import FunFact from "./funfact";

const tabs = [
  { title: "Mon", content: [], completed: false },
  { title: "Tues", content: [], completed: false },
  { title: "Wed", content: [], completed: false },
  { title: "Thurs", content: [], completed: false },
  { title: "Fri", content: [], completed: false },
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
