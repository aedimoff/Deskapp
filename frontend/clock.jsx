import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  formatDate(date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let [m, d, y] = date.split("/");
    return `${days[(d % 7) - 1]} ${months[m - 1]} ${d}, ${y}`;
  }

  tick() {
    this.setState({ time: new Date() });
  }
  render() {
    const time = this.state.time;
    return (
      <div className="clock">
        <h1>Current Time</h1>
        <div>Today is: {this.formatDate(time.toLocaleDateString())}</div>
        <div>Time: {time.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Clock;
