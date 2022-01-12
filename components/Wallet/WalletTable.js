import React from "react";
import { Col, Container, Row, Table } from "reactstrap";
import MaterialTable from "material-table";


const WalletTable = () => {
  const columns = [];

  return (
    <div>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <p className="pmain" style={{ float: "right" }}>Wallet Balance: 1500 INR</p>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Row>
          <Col className="middle">
            <Table striped bordered style={{maxWidth:'600px'}} >
              <thead className='theadback'>
                <tr>
                  <th>Date</th>
                  <th>Reason</th>
                  <th>Amount(INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WalletTable;
