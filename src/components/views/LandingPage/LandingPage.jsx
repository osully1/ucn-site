import { useState } from 'react'
import { Row, Col, Image, Tab } from "react-bootstrap";
import Home from './components/Home'
import AboutUs from "./components/AboutUs";
import MenuButton from "../../global/MenuButton/MenuButton";
import Services from "./components/Services";
import OurStaff from "./components/OurStaff";
import Ministries from "./components/Ministries";
import Photos from "./components/Photos";

const LandingPage = () => {
    const [ tab, setTab ] = useState('Home')
    return (
      <div className="position-relative w-100">
        <Image src="/images/bg.jpg" className="position-absolute w-100" style={{ objectFit: 'cover', zIndex: '-1' }} />
        <Row className="w-100">
          <Col xs={3} />
          <Col xs={6} className="border-bottom border-end border-primary px-0 mb-48">
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
                <MenuButton setTab={setTab} tab={'Home'} />
                <MenuButton setTab={setTab} tab={'About Us'} />
                <MenuButton setTab={setTab} tab={'Services'} />
                <MenuButton setTab={setTab} tab={'Our Staff'} />
                <MenuButton setTab={setTab} tab={'Ministries'} />
                <MenuButton setTab={setTab} tab={'Photos'} />
                <MenuButton setTab={setTab} tab={'Sermons'} />
                <MenuButton setTab={setTab} tab={'Contact/Directions'} />
              </Col>
              <Col xs={9} className="bg-white">
                <Tab.Container activeKey={tab} className="border-0">
                  <Tab.Content className="w-100">
                    <Tab.Pane eventKey="Home">
                      <Home />
                    </Tab.Pane>
                    <Tab.Pane eventKey="About Us">
                      <AboutUs />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Services">
                      <Services />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Our Staff">
                      <OurStaff />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Ministries">
                      <Ministries />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Photos">
                      <Photos />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default LandingPage;
  