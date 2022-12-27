import React from 'react'
import'./home2.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Sectionn1 from '../About/Sectionn1';
import Sectionn2 from '../About/Sectionn2';

export default function Index() {
  return (
    <>
     <Container fluid="md">
      <Row>
        <Col className='cay'>
        <div className='esas'><h1 className='h1'>Our mission is to make building websites easier for everyone.</h1>
        <p className='aboutp'>Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.</p>
        <Button variant="primary">Read Out Story</Button>{' '} </div>
        </Col>
      </Row>
    </Container>
   <Sectionn1/>
   <Sectionn2/>

    </>
  )
}