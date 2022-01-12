import React, { useState } from 'react'
import { Button, Col, Container, Input, Row, Table } from 'reactstrap'
import Image from 'next/image'

const MainCart = () => {
    const [state, setstate] = useState(1)
    const data = [{
        title:'RICA Liposoluble WAX with Argan Oil Roll-On (For Very Sensitive Skin)',
        service: [{ id: 1, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', rating: '4.56', totalrating: "450", Price: "250", time: '30', title: 'waxaing' },
        { id: 2, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', rating: '4.56', totalrating: "450", Price: "250", time: '30', title: 'waxaing' },
        { id: 3, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', rating: '4.56', totalrating: "450", Price: "250", time: '30', title: 'waxaing' },
        { id: 4, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', rating: '4.56', totalrating: "450", Price: "250", time: '30', title: 'waxaing' },
    ]}]
    return (
        <>
        <div style={{ padding: '20px', marginTop: '20px' }}>
            <Container>
                <Row style={{backgroundColor:'#f5f5f5'}}>
                        {
                            data.map((i,index) => (
                                <>
                                <h3 style={{fontSize:'18px', fontWeight:'700',color:'#838441',padding:'15px'}}>{i.title}</h3>
                                {i.service.map((s)=>(
                                <Table
                                    borderless
                                    responsive
                                    size="sm"
                                    key={index}
                                    style={{padding:'25px'}}
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p key={index} className='pmain'>{s.title}</p>
                                                {/* <p><span className="fa fa-star checked"></span> {i.rating}<span style={{ color: '#000' }}> {i.totalrating} ratings</span> {i.Price}INR {i.time}min</p> */}
                                            </td>
                                            <td style={{ float: 'right' }}>
                                                <div className='cart-num'>
                                                    <p className='cart-btn' onClick={() => setstate(state + 1)}>+</p>
                                                    <input type='text' className='cart-final-num' value={state} />
                                                    <p className='cart-btn' onClick={() => setstate(state - 1)}>-</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p style={{fontSize:'20px', fontWeight:'bold', textAlign:'center'}}>{s.Price} INR</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                ))}
                                </>
                            ))
                        }
                </Row>
            </Container>
            </div>
            <Container style={{ backgroundColor: '#f5f5f5', height: '90px' }}>
                <Row style={{ marginTop: '40px', padding: '20px' }}>
                    <Col lg='6' sm='12'>
                        <div className='address-price '>
                            {/* <p style={{width:'40px',height:'40px',backgroundColor:'#838441',borderRadius:'20px',textAlign:'center',lineHeight:'40px',color:'white' }}>1</p> */}
                            <p style={{ fontWeight: 'bold' }}>{250}INR {50}MIN</p>
                        </div>
                    </Col>
                    <Col lg='6' sm='12'>
                        <div className='address-continue-btn'>
                            <Button className='address-btn-two'>Done</Button>
                            <Button className='address-btn-two'>Continue Shopping</Button>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainCart
