import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
    <Container className="main">
      <Row>
        <h1 className="welcome-header">Welcome to your day!</h1>
      </Row>
      <Row className="widgets">
        <Col><Clock /></Col>
        <Col><Tasks tabs={tabs} /></Col>
        <Col><News /></Col>
      </Row>
      <Row className="widgets">
        <Col><Weather /></Col>
        <Col><FunFact /></Col>
      </Row>
    </Container>
  );
};

export default Widgets;
