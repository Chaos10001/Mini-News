import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideSlider from "../../Navbars/Side-Slider/Side-Slider";
import Content from "../inc/Content";
import "./home.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col lg={1} className="me-3">
          <SideSlider />
        </Col>
        <Col>
          <Content />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
