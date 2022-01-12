import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
const CheckoutPayment = () => {
  return (
    <Container
      style={{ marginTop:'30px', backgroundColor: "#f5f5f5"}}
    >
      <Row style={{padding: "15px" }}>
        <Col  md="6">
        <h4><span style={{backgroundColor:'#838441',width:'25px',height:"25px",borderRadius:'50%',display:'inline-block',textAlign:'center',fontWeight:'400'}}>1</span> <span style={{textDecoration:"line-through"}}> 250 INR</span><span> 50 MIN</span></h4>
        <h4>250 INR</h4>
        </Col>
        <Col  md="6">
          <div className="address-continue-btn">
          <Button className='address-btn-two' style={{backgroundColor:'#838441', lineHeight:'25px',marginTop:'15px'}}>Make Payment</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPayment;
