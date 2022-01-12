import React,{useState} from 'react'
import MaterialTable from 'material-table'
import { Container, Row ,Col,Table, Button} from 'reactstrap'

const OrderTable = () => {
 const [state, setstate] = useState()
  const data = [
    { date: '11/01/22', orderno: 12345, service: 'waxing',price:200},
    { date: '02/01/22', orderno: 21567, service: 'waxing',price:350},
    { date: '20/01/22', orderno: 21567, service: 'waxing',price:350},
    { date: '10/01/22', orderno: 12345, service: 'waxing',price:200},
  ]  
  const handleView = (i) => {
    setstate(i); 
}
 console.log(state)
  return (
    <>
      <section>
      <Container
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Row>
          <Col className="middle">
            <Table striped bordered style={{maxWidth:'800px'}}>
              <thead className='theadback'>
                <tr>
                  <th>Date</th>
                  <th>Order</th>
                  <th>Service</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
                {
            data.map((i,index)=>(
              <> <tbody>
                  <td>{i.date}</td>
                  <td>{i.orderno}</td>
                  <td>{i.service}</td>
                  <td>{i.price}</td>
                  <td><Button onClick={() => handleView(i)}>Details</Button></td>
                  </tbody>
              </>
            ))}
            </Table>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  )
}

export default OrderTable
