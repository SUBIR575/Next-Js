import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import img from '../../assets/images/banner.jpg'
const Banner = () => {
  return (
    <>
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12" md="12" className="align-self-center text-center">
            <h1 style={{color:'#fff'}}>Your Beauty Service Expert</h1>
            <p style={{color:'#fff'}}>
              Get Instant Access to reliable and affordable Service
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className='round-box'>
        <div className='round-text'><p style={{ paddingTop: '40px' }}>Hurry! Up <br />Book Packages <br/>with 50% Discount</p></div>
      </div>
    </>
  );
};

export default Banner;
