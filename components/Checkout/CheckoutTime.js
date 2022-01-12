import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Button } from "reactstrap";
const CheckoutTime = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Container>
        <Row>
          <Col style={{ textAlign: "center", margin: "30px" }}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              placeholderText="Click to select a Time"
              timeIntervals={30}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              withPortal
              className="red-border"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CheckoutTime;
