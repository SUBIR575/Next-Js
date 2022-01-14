import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/features/android.png";
import img2 from "../../../assets/images/features/apple.png";

const C2acomponent = () => {
  return (
    <div className="call-one">
      <div className="call-two">
        <Container>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="book">
                <h4>Book Your Profossional</h4>
                <form style={{marginTop:'20px'}}>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input type="number" class="form-control" id="inputEmail4" placeholder="Enter Your Phone Number"/>
                    </div>
                    </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="app">
                <h4>Download Your Own Mobile Apps</h4>
                <a href="#" className="m-b-20">
                  <Image src={img1} alt="img"/>
                </a>
                <a href="#" className="m-b-20">
                  <Image src={img2} alt="img" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default C2acomponent;
