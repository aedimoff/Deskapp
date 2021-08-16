import React from "react";
import Clock from "./clock";
import News from "./news";
import Tasks from "./tasks";
import Weather from "./weather";
import FunFact from "./funfact";

const tabs = [
  { title: "Monday", content: "first tab" },
  { title: "Tuesday", content: "second tab" },
  { title: "Wednesday", content: "second tab" },
  { title: "Thursday", content: "second tab" },
  { title: "Friday", content: "second tab" },
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
