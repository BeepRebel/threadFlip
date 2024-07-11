// src/ButtonsComponent.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ButtonsComponent.css';

const ButtonsComponent = () => {
  return (
    <Container className="boxes-container">
      <Row className="mb-4">
        <Col>
          <div className="custom-box">Box 1</div>
        </Col>
        <Col>
          <div className="custom-box">Box 2</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="custom-box">Box 3</div>
        </Col>
        <Col>
          <div className="custom-box">Box 4</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ButtonsComponent;
