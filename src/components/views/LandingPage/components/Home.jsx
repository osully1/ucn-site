import { Row, Col, Image } from "react-bootstrap";

const Home = () => {
  console.log('home')
  return (
    <Row className="text-primary text-center pb-32">
      <Col xs={6} className="pt-32 ps-32 fs-5">
        <p className="display-4 fw-bold text-primary">Welcome!</p>
        <p className="fs-3 lh-sm">The United Church of Norwood</p>
        <p className="fs-5 mb-8">Evangelical Free Church of America</p>
        {/* <p className="mb-0">An affiliate of the Evangelical Free Church of America</p> */}
        <p className="mb-0">You can follow us on Facebook and watch our live-stream service every Sunday morning at 10:00 a.m. by clicking <a href="https://www.facebook.com/unitedchurchofnorwood/" target="about:blank" className="fw-bold">here</a>.</p>
        <div className="w-100 bg-gray-100 my-32" style={{height: "2px"}} />
        <p>For more info about the Evangelical Free Church of America and for helpful, inspirational articles go to <a href="https://www.efca.org/" target="about:blank">www.efca.org</a></p>
      </Col>
      <Col xs={6} className="ps-0">
        <Image src="/images/home.jpeg" className="w-100" />
      </Col>
      <p className="fs-3 py-24 mb-0">595 Washington Street, Norwood, MA 02062 <br /> 781-762-2589</p>
      <small className="mb-0">Copyright 2022 United Church of Norwood. All rights reserved.</small>
    </Row>

  );
};
  
  export default Home;