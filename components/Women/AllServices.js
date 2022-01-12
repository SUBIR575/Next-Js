import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Image from "next/image";
import Link from 'next/link'
const AllServices = () => {
    const data = [
        { id: 1, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 2, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 3, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 4, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 5, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 6, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 7, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 8, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 9, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 10, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 11, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 12, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 13, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 14, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 15, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 16, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 17, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 18, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 19, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
        { id: 20, image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',title:'waxaing' },
    ]
    
    return (
        <div style={{backgroundColor:'#F5F5F5',width:'100%',marginTop:'20px',padding:'20px'}}>

            <Container style={{marginTop:'50px'}}>
                <Row>
                    {
                        data.map((i) =>
                            <Col lg="3" md='6' sm='12' className="service-img" key={i}>
                                <Link href='/women'>
                                <Image
                                    src={i.image}
                                    alt="img"
                                    className="img-responsive round-img"
                                    width='200px'
                                    height='200px'    
                                />
                                </Link>
                                <h4 style={{color:'#838441'}}>{i.title}</h4>
                                <p>{i.des}</p>
                            </Col>
                        )
                    }
                </Row>
            </Container>

        </div>
    )
}

export default AllServices
