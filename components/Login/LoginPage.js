import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from "reactstrap";
import Link from 'next/link'
const LoginPage = () => {
   
    return (
        <>
            <div className="coming-soon" id="coming">
                <Container className=" mt-5">
                    <Row>
                        <Col md="6">
                            <div className='login'>
                                <div style={{ display: 'block', margin: 'auto' }}>
                                    <Form style={{ width: '80%' }}>
                                        <FormGroup>
                                            <Label for="exampleEmail"
                                            size="lg">
                                                Phone Number
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="phone"
                                                placeholder="Phone Number"
                                                type="number"
                                                
                                            />
                                        </FormGroup>
                                        {' '}
                                        <FormGroup>
                                            <Label for="examplePassword"
                                            size="lg">
                                                Select City
                                            </Label>
                                            <Input
                                                id="examplePassword"
                                                bsSize="sm"
                                                className="mb-3"
                                                placeholder="Select City"
                                                type="select"
                                            />
                                        </FormGroup>
                                        {' '}
                                        <Link href ='/verification'>
                                        <Button style={{backgroundColor:'#fff',color:'#000'}} onClick={(e) => handleClick(e, "/cart")}>
                                            Submit
                                        </Button>
                                        </Link>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LoginPage
