import React from 'react'
import Section1 from '../Sections/Section1';
import Section2 from '../Sections/Section2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import './home.css';
import Section3 from '../Sections/Section3';
import Section4 from '../Sections/Section4';



export default function Index() {
  return (
    <>
  
      <Row className='section1'>
        <Col><div className='text'>
          <h1>A Bootstrap 5 template for modern businesses</h1>
          <p className='p'>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
          <div className='buttons'>
          <Button variant="primary">Get Started</Button>{' '}
          <Button className='dark' variant="outline-dark">Learn More</Button></div></div>
          </Col>
        <Col><div className='img'><img src='https://dummyimage.com/600x400/343a40/6c757d'></img></div></Col>
      </Row>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>





      
   
    </>

  )
}
