import { useState } from 'react'
import { Row, Col, Image, Tab } from "react-bootstrap";
import Home from './components/Home'

const LandingPage = () => {
    const [ tab, setTab ] = useState('Home')
    return (
      <div className="position-relative w-100" style={{ height: '100vh'}}>
        <Image src="/images/bg.jpg" className="position-absolute w-100 h-100" style={{ objectFit: 'cover', zIndex: '-1' }} />
        <Row className="w-100">
          <Col xs={3} />
          <Col xs={6}>
            <div 
              className="w-100 text-white ratio banner-ratio font-non-serif"
              style={{backgroundImage: "url(/images/sky3.jpeg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
              <div className="d-flex flex-column text-center">
                <p className="display-5 fw-bold pt-64 mb-0">United Church of Norwood</p>
                <p className="fs-2 fw-bold">Many Peoples, One Church</p>
              </div>
            </div>
            <div className="d-flex justify-content-end bg-primary">
              <p className="text-white font-cardiff fw-bold fs-4 mb-0 pe-32">{tab}</p>
            </div>
            <div className="d-flex flex-row w-100">
              <Col xs={3} className="fs-5 bg-secondary text-primary border-start border-end border-primary p-0">
                <div className="d-flex align-items-center border-bottom border-primary-hover grad-vertical ps-24 py-8">
                  <p className="mb-0">Home</p>
                </div>
                <div className="d-flex align-items-center border-bottom border-primary-hover grad-vertical ps-24 py-8">
                  <p className="mb-0">About Us</p>
                </div>
                <div className="d-flex align-items-center border-bottom border-primary-hover grad-vertical ps-24 py-8">
                  <p className="mb-0">Services</p>
                </div>
                <div className="d-flex align-items-center border-bottom border-primary-hover grad-vertical ps-24 py-8">
                  <p className="mb-0">Our Staff</p>
                </div>
                <div className="d-flex align-items-center border-bottom border-primary-hover grad-vertical ps-24 py-8">
                  <p className="mb-0">Ministries</p>
                </div>
                <div className="d-flex align-items-center border-bottom border-primary-hover grad-vertical ps-24 py-8">
                  <p className="mb-0">Photos</p>
                </div>
                <div className="d-flex align-items-center border-bottom border-primary-hover grad-vertical ps-24 py-8">
                  <p className="mb-0">Sermons</p>
                </div>
                <div className="d-flex align-items-center ps-24 grad-vertical py-8">
                  <p className="mb-0">Contact/Directions</p>
                </div>
              </Col>
              <Col xs={9} className="bg-white px-40 py-32">
                <Home />
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default LandingPage;
  