import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'

const AddressForm = () => {
    return (
        <div style={{ padding: '20px', marginTop: '20px' }}>
            <Container>
                <Row>
                    <form className="row g-3" style={{ color: '#000', marginTop: '50px', backgroundColor: '#f5f5f5', padding: '20px' }}>
                        <div className="col-md-6">
                            <label className="form-label">Address Line 1</label>
                            <input type="text" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Address Line 2</label>
                            <input type="text" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="inputEmail4" placeholder='City' />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="inputPassword4" placeholder='State' />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Phone Number</label>
                            <input type="number" className="form-control" id="inputPassword4" />
                        </div>
                    </form>
                </Row>
            </Container>
            <Container style={{backgroundColor:'#f5f5f5',height:'90px'}}>
                <Row style={{marginTop:'40px',padding:'20px'}}>
                    <Col lg='6' sm='12'>
                        <div className='address-price'>
                            <h6 style={{lineHeight:"50px"}}>Total Price: 2557 INR</h6>
                        </div>
                    </Col>
                    <Col lg='6' sm='12'>
                        <div className='address-continue-btn'>
                            <Button className='address-btn-two'>Continue Shopping</Button>
                            <Button className='address-btn-two'>Continue To Book</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddressForm
