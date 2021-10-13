import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Clock from "./clock";
import News from "./news";
import Tasks from "./tasks";
import Weather from "./weather";
import FunFact from "./funfact";
import Quote from "./quote";

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
      <Row className="widgets-row">
          <Col med={8}>
            <Row className="small-card-row">
              <Col><Clock/></Col>
              <Col><Quote/></Col>
              <Col><FunFact/></Col>
            </Row>
            <Row>
              <Col><Tasks tabs={tabs}/></Col>
            </Row>
          </Col> 
          <Col sm={4}>
            <Col><News/></Col>
            <Col><Weather/></Col>
          </Col> 
      </Row>
    </Container>
  );
};

export default Widgets;
