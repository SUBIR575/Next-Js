/* eslint-disable */
import React, { useState } from "react";
import {
  Row,
  Container,
} from "reactstrap";
import Image from "next/image";
import logo from "../../../assets/images/logos/green-logo.png";
import leaf from "../../../assets/images/leaf.png";
import Link from "next/link";
import { useRouter } from "next/router";
import male from '../../../assets/images/features/male.png'
import female from '../../../assets/images/features/female.png'
const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div>
        <Container>
          <Row>
            <div className="col">
              <div className="select-box">
                <form>
                  <div className="form-group">
                    <label for="inputState">Where do You Need a Service?</label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div className="section-one">
        <h1 className="title">Services</h1>
        <h6 className="sub">
          Salon at Home
        </h6>
        <div className="leaf">
        <Image src={leaf} width='50px'alt="Responsive image"/>
        </div>
      </div>
      <div className="service">
        <div className='Container'>
          <div className="row no-gutters">
            <div className="col-lg-6 col-sm-12 padding-0">
              <div className="male">
                <Link href='/womenservices'>
                <Image src={male} className="img-fluid" alt="Responsive image" />
                </Link>
                <h3>Salon For Man</h3>
                <p style={{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 padding-0">
              <div className="female">
                <Link href='/womenservices'>
                <Image src={female} className="img-fluid" alt="Responsive image" />
                </Link>
                <h3>Salon For Woman</h3>
                <p style={{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-two">
        <div className='Container'>
        <div className="leaf" style={{textAlign:'center'}}>
        <Image src={leaf}  width='50px'alt="Responsive image"/>
        </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="male">   
                <h2>About Karo Club</h2>
                <p style={{textAlign:'center',width:'500px',marginTop:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 padding-0">
              <div className="text-two">
                
                <h2>How Karo Club Different?</h2>
                <p style={{textAlign:'center',width:'500px',marginTop:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     

    </>
  );
};

export default HeaderComponent;
