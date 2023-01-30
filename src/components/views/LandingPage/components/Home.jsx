import { useState } from 'react'
import { Row, Col, Image, Tab } from "react-bootstrap";

const Home = () => {
  console.log('home')
  return (
    <Row className="text-primary text-center">
      <Col xs={6}>
        <p className="display-4 fw-bold text-primary mb-0">Welcome!</p>
        <p className="mb-8 fs-4 lh-sm">The United Church of Norwood, <br />Inder-denominational</p>
        <p className="mb-0">An affiliate of the Evangelical Free Church of America</p>
      </Col>
    </Row>

  );
};
  
  export default Home;