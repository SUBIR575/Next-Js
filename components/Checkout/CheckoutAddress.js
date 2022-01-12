import React from "react";
import Link from 'next/link'
import { Container, Row, Col, Button } from "reactstrap";
const CheckoutAddress = () => {
  return (
    <Container>
      <Row>
        <Col xs="8" md="6">
          <h2>Address</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </Col>
        <Col xs="auto" md="6">
        <Link href="/location">
          <Button style={{ float: "right", backgroundColor: "#838441" }}>
            Change
          </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutAddress;
