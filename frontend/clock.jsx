import React from "react";
import { Container, Card } from "react-bootstrap";
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
      <Card style={{height: '15rem'} }className="clock card">
        <div className="time">{time.toLocaleTimeString()}</div>
        <div className="date">{this.formatDate(time.toLocaleDateString())}</div>
      </Card>
    );
  }
}

export default Clock;
