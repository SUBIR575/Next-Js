import React, { useState } from "react";
import { Button, Col, Container, Input, Row, Table } from "reactstrap";
import Image from "next/image";
const CategoryWiseService = () => {
  const [state, setstate] = useState(1);
  
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
  const handleAddToCart = (id) => {
    const newProduct = data?.find((pd) => pd.id === id);
    setCart([...cart, { ...newProduct, quantity: 1 }]);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            {data.map((i, index) => (
              <section key={index} style={{}}>
                <Container>
                  <Row>
                    <Table borderless>
                      <tbody style={{ lineHeight: "20px" }}>
                        <td className="tablepadding">
                          
                            <td style={{textAlign:'left',padding:'0px',color:'#000'}}>
                              <span style={{fontSize:'16px',fontWeight:'700'}}>{i.title}</span>
                              <br />
                              <span style={{ fontWeight: "700",fontSize:'16px'}} className="fa fa-star">{i.rating}</span> <span style={{fontSize:'13px'}}>{i.totalrating} ratings</span> <span style={{fontWeight:'700',fontSize:'16px' }}>{i.Price}INR</span> <span style={{fontSize:'13px'}}>{i.time}MIN</span>
                                  
                            </td>
                          
                        </td>
                        <td style={{display:'flex',alignItems:'center',justifyContent:'center'}} className="tablepadding"> 
                          <div
                            className="cart-num"
                          >
                            <p
                              className="cart-btn-left"
                              onClick={() => setstate(state + 1)}
                            >
                              +
                            </p>
                            <input
                              type="text"
                              className="cart-final-num"
                              value={state}
                            />
                            <p
                              className="cart-btn-right"
                              onClick={() => setstate(state - 1)}
                            >
                              -
                            </p>
                          </div>
                        </td>
                        <td className="tablepadding">
                          <i className="fa fa-shopping-cart" onClick={handleAddToCart} style={{color:'#000',backgroundColor:'#838441',padding:'8px',borderRadius:'15px',cursor:'pointer'}}></i>
                        </td>
                      </tbody>
                    </Table>
                  </Row>
                </Container>
              </section>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryWiseService;
