import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from "reactstrap";
import Link from 'next/link'
const VerificationPage = () => {
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
                                                Verify No
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="otp"
                                                placeholder="OTP No"
                                                type="number"
                                                
                                            />
                                        </FormGroup>
                                        {' '}
                                        <Link href ='/'>
                                        <Button style={{backgroundColor:'#fff',color:'#000'}}>
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

export default VerificationPage
