/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Container } from "reactstrap";
import Image from "next/image";
import logo from "../../../assets/images/logos/green-logo.png";
import leaf from "../../../assets/images/leaf.png";
import Link from "next/link";
import { useRouter } from "next/router";
import male from "../../../assets/images/men.jpg";
import female from "../../../assets/images/women.jpg";
const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState([]);
  const [loading, setloading] = useState(true);
  const [value, setValue] = useState();
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    
    axios
      .post(
        "http://karoclub-001-site1.btempurl.com/api/api/website/City/GetAll"
      )
      .then((response) => {
        setCity(response.data.Data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    !loading?localStorage.setItem("value",value):null
  });
  
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
                    <select
                      disabled={loading}
                      className="form-control"
                      onChange={(e) => setValue(e.currentTarget.value)}
                    >
                      {city.map((i, index) => (
                        <option key={index} value={i.CityId}>{i.Name}</option>
                      ))}
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
        <h6 className="sub">Salon at Home</h6>
        <div className="leaf">
          <Image src={leaf} width="50px" alt="Responsive image" />
        </div>
      </div>
      <div className="service">
        <div className="Container">
          <div className="row no-gutters">
            <div className="col-lg-6 col-sm-12 padding-0">
              <div className="male">
                <Link href="/womenservices">
                  <Image
                    src={male}
                    width={500}
                    height={400}
                    className="home-img"
                    alt="Responsive image"
                  />
                </Link>
                <h3 style={{ fontWeight: "700" }}>Salon For Man</h3>
                <p style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 padding-0">
              <div className="female">
                <Link href="/womenservices">
                  <Image
                    src={female}
                    width={500}
                    height={400}
                    className="home-img"
                    alt="Responsive image"
                  />
                </Link>
                <h3 style={{ fontWeight: "700" }}>Salon For Woman</h3>
                <p style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-two">
        <div className="Container">
          <div className="leaf" style={{ textAlign: "center" }}>
            <Image src={leaf} width="50px" alt="Responsive image" />
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="male">
                <h2>About Karo Club</h2>
                <p
                  style={{
                    textAlign: "center",
                    width: "500px",
                    marginTop: "20px",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 padding-0">
              <div className="text-two">
                <h2>How Karo Club Different?</h2>
                <p
                  style={{
                    textAlign: "center",
                    width: "500px",
                    marginTop: "20px",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
