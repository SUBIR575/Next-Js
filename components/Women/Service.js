import React, { useState, useEffect } from 'react'
import {
    Button, Container, Col, Row, Card, CardBody, Modal, ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap'
import CategoryWiseService from './CategoryWiseService'

const Service = (props) => {
    const [state, setstate] = useState(true)
    const [value, setValue] = useState()
    const [modal, setModal] = useState(false);
    const data = [
        { name: "title 1", subcategory: { id: 1, name: "Demo 1", rating: '5', price: '299', time: '20', des1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' } },
        { name: "title 2", subcategory: { id: 2, name: "Demo 2", rating: '3', price: '250', time: '40', des1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' } },
        { name: "title 3", subcategory: { id: 3, name: "Demo 3", rating: '3.8', price: '270', time: '40', des1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' } },
        { name: "title 4", subcategory: { id: 4, name: "Demo 4", rating: '2.5', price: '284', time: '50', des1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' } },
        { name: "title 5", subcategory: { id: 5, name: "Demo 5", rating: '4.0', price: '290', time: '30', des1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' } },
        { name: "title 6", subcategory: { id: 6, name: "Demo 6", rating: '2.64', price: '200', time: '20', des1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' } },
        { name: "title 7", subcategory: { id: 7, name: "Demo 7", rating: '3.68', price: '250', time: '30', des1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' } },
        { name: "title 8", subcategory: { id: 8, name: "Demo 8", rating: '4.65', price: '300', time: '40', des1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' } },
        { name: "title 9", subcategory: { id: 9, name: "Demo 9", rating: '4.2', price: '400', time: '50', des1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' } },
    ]
    const toggle = () => {
        setModal(!modal);
    };
    const handleView = (item) => {
        setstate(false);
        setValue(item.subcategory)
    }
    const refs = data.reduce((acc, value) => {
        acc[value.id] = React.createRef();
        return acc;
    }, {});

    const handleClick = id =>
        refs[id].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    useEffect(() => {

    }, [modal])

    console.log(value)

    return (
        <div>
            <div>
                <div className="pricing spacer b-t">
                    <Container>
                        <Row className="m-t-40">
                            <Col md="4" className="ml-auto category">
                                <div className="card example-1 scrollbar-ripe-malinka">
                                    <div className="card-body">
                                        {data.map(item => (
                                            <li key={item.id}>
                                                <Button style={{margin:'10px'}} className='category' color="primary"
                                                    outline
                                                    onClick={() => handleClick(item.id)}
                                                >
                                                    {item.name}
                                                </Button>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Col md="4" className="ml-auto pricing-box align-self-center">
                                <div className="card example-1 scrollbar-ripe-malinka">
                                    <div className="card-body">
                                        {
                                            data.map((item, index) => (
                                                <>
                                                    <div className='main-card' key={index} ref={refs[item.id]}>
                                                        <h4 style={{backgroundColor:'#000', padding:'10px', color:'#fff' }}>{item.name}</h4>
                                                        <div className='img-card'>
                                                            <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid image-text" alt="Responsive image" width='60px' height='40px' />
                                                            <img src='https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' className="img-fluid image-text" alt="Responsive image" width='60px' height='40px' />
                                                            <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid image-text" alt="Responsive image" width='60px' height='40px' />
                                                        </div>
                                                        <h5 style={{ fontWeight: 'bold' }}>{item.subcategory.name}</h5>
                                                        <p style={{ color: 'black' }}><span className="fa fa-star checked"></span>{item.subcategory.rating}</p>
                                                        <p style={{}}><span>{item.subcategory.price}INR</span> <span>{item.subcategory.time}min</span></p>
                                                        <ul>
                                                            <li>{item.subcategory.des1}</li>
                                                            <li>{item.subcategory.des2}</li>
                                                        </ul>
                                                        <div className='main-btn'>
                                                            <Button className='btn m-t-20 btn-arrow' onClick={() => handleView(item)}>View More</Button>
                                                            <Button className='btn m-t-20 btn-arrow' type="button" onClick={toggle.bind(null)}>Add+</Button>
                                                            <Modal
                                                                size="md"
                                                                isOpen={modal}
                                                                toggle={toggle.bind(null)}
                                                                scrollable
                                                                fullscreen="sm"
                                                                className={props.className}
                                                            >
                                                                <ModalHeader toggle={toggle.bind(null)}>Services</ModalHeader>
                                                                <ModalBody>
                                                                    <CategoryWiseService/>
                                                                </ModalBody>
                                                                <ModalFooter style={{ backgroundColor: '#7F803F', }}>
                                                                    <div className='address-price '>
                                                                        <p style={{ fontWeight: 'bold', margin: '0px' }}>{250}INR {50}MIN</p>
                                                                    </div>
                                                                    <Button style={{ backgroundColor: 'black', color: '#fff' }} onClick={toggle.bind(null)}>
                                                                        Continue Shoping
                                                                    </Button>{" "}
                                                                    <Button style={{ backgroundColor: 'black', color: '#fff' }} onClick={toggle.bind(null)}>
                                                                        Done
                                                                    </Button>
                                                                </ModalFooter>
                                                            </Modal>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>
                            </Col>
                            <Col md="4" className="ml-auto pricing-box align-self-center">
                                <div className="card example-1 scrollbar-ripe-malinka">
                                    <div className="card-body">
                                        {
                                            state ? null :
                                                <div className='main-card'>
                                                    <div className='img-card'>
                                                        <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid image-text" alt="Responsive image" width='60px' height='40px' />
                                                        <img src='https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' className="img-fluid image-text" alt="Responsive image" width='60px' height='40px' />
                                                        <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid image-text" alt="Responsive image" width='60px' height='40px' />
                                                    </div>
                                                    <h5 style={{ fontWeight: 'bold' }}>{value.name}</h5>
                                                    <p style={{ color: 'black' }}><span className="fa fa-star checked"></span>{value.rating}</p>
                                                    <p style={{}}><span>{value.price}INR</span> <span>{value.time}min</span></p>
                                                    <div className='list-border'>
                                                        <ul>
                                                            <li>{value.des1}</li>
                                                            <li>{value.des2}</li>
                                                        </ul>
                                                    </div>
                                                    <div className='main-cart-btn'>
                                                        <Button className='btn m-t-10 btn-arrow' style={{ backgroundColor: '#828341', padding: '3px 10px', float: 'right' }}>Add+</Button>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Service
