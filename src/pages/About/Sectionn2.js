import React from 'react'
import'./section2.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function section2() {
  return (
    <>
    <div className='conteynir' >
    <Container className='salam' >
      
      <Row>
        <div className='textcenter'>
          <h2>Our team</h2>

          <p>Dedicated to quality and your success</p>
        </div>
        <div className='kartlar'>
        <Col><div className='div'>
          <img src='https://dummyimage.com/150x150/ced4da/6c757d'></img>
          <h5>Ibbie Eckart</h5>
          <p>Founder & CEO</p>
          </div>
          </Col>
        <Col><div className='div'><img src='https://dummyimage.com/150x150/ced4da/6c757d'></img>
        <h5>Ibbie Eckart</h5>
          <p>Founder & CEO</p>
          </div></Col>
        <Col><div className='div'><img src='https://dummyimage.com/150x150/ced4da/6c757d'></img>
        <h5>Ibbie Eckart</h5>
          <p>Founder & CEO</p></div>
          </Col>
        <Col> <div className='div'><img src='https://dummyimage.com/150x150/ced4da/6c757d'></img>
        <h5>Ibbie Eckart</h5>
          <p>Founder & CEO</p></div></Col>
        </div> 
        </Row>
    </Container>
    </div>
</>
  
  )
}
