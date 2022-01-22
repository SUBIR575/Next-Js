import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Col,
  Row,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import CategoryWiseService from "./CategoryWiseService";
import axios from "axios";
const Service = () => {
  const [state, setstate] = useState(true);
  const [value, setValue] = useState();
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState();
  const [first, setfirst] = useState(false);
  const [number, setNumber] = useState(1);
  let id = localStorage.getItem("value");
  console.log(id);
  useEffect(() => {
    let city = {
      CityId: id,
    };
    axios
      .post(
        "http://karoclub-001-site1.btempurl.com/api/api/website/Category/GetAll",
        city
      )
      .then((response) => {
        setCategory(response.data.Data);
        setfirst(true);
      })
      .catch((error) => {
        console.log(error);
        setfirst(false);
      });
  }, [id]);
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      rating: "4.56",
      totalrating: "450",
      Price: "250",
      time: "30",
      title: "waxaing",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      rating: "4.56",
      totalrating: "450",
      Price: "250",
      time: "30",
      title: "waxaing",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      rating: "4.56",
      totalrating: "450",
      Price: "250",
      time: "30",
      title: "waxaing",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      rating: "4.56",
      totalrating: "450",
      Price: "250",
      time: "30",
      title: "waxaing",
    },
  ];
  const handleAddToCart = () => {
    alert("add to cart successfully");
  };
  const toggle = () => {
    setModal(!modal);
  };
  const handleView = (i) => {
    setstate(false);
    setValue(i);
  };
  

  const handleClick = (id) =>
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  useEffect(() => {}, [modal]);

  console.log(value);

  return (
    <div>
      <div>
        <div className="pricing spacer b-t">
          <Container>
            <Row className="m-t-40">
              <Col md="4" className="ml-auto category">
                <div className="card example-1 scrollbar-ripe-malinka">
                  <div className="card-body">
                    {first
                      ? category.map((item) => (
                          <li key={item.id}>
                            <Button
                              style={{ margin: "10px" }}
                              className="category"
                              color="primary"
                              outline
                              onClick={() => handleClick(item.id)}
                            >
                              {item.Name}
                            </Button>
                          </li>
                        ))
                      : null}
                  </div>
                </div>
              </Col>
              <Col md="4" className="ml-auto pricing-box align-self-center">
                <div className="card example-1 scrollbar-ripe-malinka">
                  <div className="card-body">
                    {first
                      ? category.map((item, index) => (
                          <div className="main-card" key={index}>
                            <h4
                              style={{
                                backgroundColor: "#000",
                                padding: "10px",
                                color: "#fff",
                              }}
                            >
                              {item.Name}
                            </h4>
                            {item.SubCategories.map((i, index) => (
                              <>
                                <div className="img-card">
                                  <img
                                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    className="img-fluid image-text"
                                    alt="Responsive image"
                                    width="60px"
                                    height="40px"
                                  />
                                  <img
                                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    className="img-fluid image-text"
                                    alt="Responsive image"
                                    width="60px"
                                    height="40px"
                                  />
                                  <img
                                    src="https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    className="img-fluid image-text"
                                    alt="Responsive image"
                                    width="60px"
                                    height="40px"
                                  />
                                </div>
                                <h5 style={{ fontWeight: "bold" }}>{i.Name}</h5>
                                <p style={{ color: "black" }}>
                                  <span className="fa fa-star checked"></span>
                                  {}
                                </p>
                                <p style={{}}>
                                  <span></span>
                                  <span></span>
                                </p>
                                <ul>
                                  <li>{encodeURI(i.Description)}</li>
                                </ul>
                                <div className="main-btn">
                                  <Button
                                    className="btn m-t-20 btn-arrow"
                                    onClick={() => handleView(i)}
                                  >
                                    View More
                                  </Button>
                                  <Button
                                    className="btn m-t-20 btn-arrow"
                                    type="button"
                                    onClick={toggle.bind(null)}
                                  >
                                    Add+
                                  </Button>
                                  <Modal
                                    size="md"
                                    isOpen={modal}
                                    toggle={toggle.bind(null)}
                                    scrollable
                                    fullscreen="sm"
                                    className={props.className}
                                  >
                                    <ModalHeader toggle={toggle.bind(null)}>
                                      Services
                                    </ModalHeader>
                                    <ModalBody>
                                      <div>
                                        <Container>
                                          <Row>
                                            <Col
                                              style={{ textAlign: "center" }}
                                            >
                                              {category.map((i, index) =>
                                                i.SubCategories.map((item) =>
                                                  item.Services.map((i) => (
                                                    <section
                                                      key={index}
                                                      style={{}}
                                                    >
                                                      <Container>
                                                        <Row>
                                                          <Table borderless>
                                                            <tbody
                                                              style={{
                                                                lineHeight:
                                                                  "20px",
                                                              }}
                                                            >
                                                              <td className="tablepadding">
                                                                <td
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                    padding:
                                                                      "0px",
                                                                    color:
                                                                      "#000",
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize:
                                                                        "16px",
                                                                      fontWeight:
                                                                        "700",
                                                                    }}
                                                                  >
                                                                    {i.Name}
                                                                  </span>
                                                                  <br />
                                                                  <span
                                                                    style={{
                                                                      fontWeight:
                                                                        "700",
                                                                      fontSize:
                                                                        "16px",
                                                                    }}
                                                                    className="fa fa-star"
                                                                  >
                                                                    {i.rating}
                                                                  </span>
                                                                  <span
                                                                    style={{
                                                                      fontSize:
                                                                        "13px",
                                                                    }}
                                                                  >
                                                                    {
                                                                      i.totalrating
                                                                    }{" "}
                                                                    ratings
                                                                  </span>{" "}
                                                                  <span
                                                                    style={{
                                                                      fontWeight:
                                                                        "700",
                                                                      fontSize:
                                                                        "16px",
                                                                    }}
                                                                  >
                                                                    {i.Price}INR
                                                                  </span>{" "}
                                                                  <span
                                                                    style={{
                                                                      fontSize:
                                                                        "13px",
                                                                    }}
                                                                  >
                                                                    {i.WorkingTime}MIN
                                                                  </span>
                                                                </td>
                                                              </td>
                                                              <td
                                                                style={{
                                                                  display:
                                                                    "flex",
                                                                  alignItems:
                                                                    "center",
                                                                  justifyContent:
                                                                    "center",
                                                                }}
                                                                className="tablepadding"
                                                              >
                                                                <div className="cart-num">
                                                                  <p
                                                                    className="cart-btn-left"
                                                                    onClick={() =>
                                                                      setNumber(
                                                                        number +
                                                                          1
                                                                      )
                                                                    }
                                                                  >
                                                                    +
                                                                  </p>
                                                                  <input
                                                                    type="text"
                                                                    className="cart-final-num"
                                                                    value={
                                                                      number
                                                                    }
                                                                  />
                                                                  <p
                                                                    className="cart-btn-right"
                                                                    onClick={() =>
                                                                      setNumber(
                                                                        number -
                                                                          1
                                                                      )
                                                                    }
                                                                  >
                                                                    -
                                                                  </p>
                                                                </div>
                                                              </td>
                                                              <td className="tablepadding">
                                                                <i
                                                                  className="fa fa-shopping-cart"
                                                                  onClick={
                                                                    handleAddToCart
                                                                  }
                                                                  style={{
                                                                    color:
                                                                      "#000",
                                                                    backgroundColor:
                                                                      "#838441",
                                                                    padding:
                                                                      "8px",
                                                                    borderRadius:
                                                                      "15px",
                                                                    cursor:
                                                                      "pointer",
                                                                  }}
                                                                ></i>
                                                              </td>
                                                            </tbody>
                                                          </Table>
                                                        </Row>
                                                      </Container>
                                                    </section>
                                                  ))
                                                )
                                              )}
                                            </Col>
                                          </Row>
                                        </Container>
                                      </div>
                                    </ModalBody>
                                    <ModalFooter
                                      style={{ backgroundColor: "#7F803F" }}
                                    >
                                      <div className="address-price ">
                                        <p
                                          style={{
                                            fontWeight: "bold",
                                            margin: "0px",
                                            color: "#f5f5f5",
                                          }}
                                        >
                                          {250}INR {50}MIN
                                        </p>
                                      </div>
                                      <Button
                                        style={{
                                          backgroundColor: "black",
                                          color: "#fff",
                                        }}
                                        onClick={toggle.bind(null)}
                                      >
                                        Continue Shoping
                                      </Button>{" "}
                                      <Button
                                        style={{
                                          backgroundColor: "black",
                                          color: "#fff",
                                        }}
                                        onClick={toggle.bind(null)}
                                      >
                                        Done
                                      </Button>
                                    </ModalFooter>
                                  </Modal>
                                </div>
                              </>
                            ))}
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </Col>
              <Col md="4" className="ml-auto pricing-box align-self-center">
                <div className="card example-1 scrollbar-ripe-malinka">
                  <div className="card-body">
                    {state ? null : (
                      <div className="main-card">
                        <div className="img-card">
                          <img
                            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            className="img-fluid image-text"
                            alt="Responsive image"
                            width="60px"
                            height="40px"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            className="img-fluid image-text"
                            alt="Responsive image"
                            width="60px"
                            height="40px"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            className="img-fluid image-text"
                            alt="Responsive image"
                            width="60px"
                            height="40px"
                          />
                        </div>
                        <h5 style={{ fontWeight: "bold" }}>{value.Name}</h5>
                        <p style={{ color: "black" }}>
                          <span className="fa fa-star checked"></span>
                          {}
                        </p>
                        <p style={{}}>
                          <span>{value.price}INR</span>{" "}
                          <span>{value.time}min</span>
                        </p>
                        <div className="list-border">
                          <ul>
                            <li>{value.Description}</li>
                          </ul>
                        </div>
                        <div className="main-cart-btn">
                          <Button
                            className="btn m-t-10 btn-arrow"
                            style={{
                              backgroundColor: "#828341",
                              padding: "3px 10px",
                              float: "right",
                            }}
                          >
                            Add+
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Service;
