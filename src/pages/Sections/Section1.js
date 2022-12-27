import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import'./Section1.css';
import { BsFillCollectionFill, BsToggles,BsBuilding } from 'react-icons/bs';





export default function Section1() {
  return (
   <>
     <Container>
      <Row className='row1'>
        <Col className='coll'><h2 className='h2'>A better way to start building.</h2></Col>
        <Col className='coll' >
        <a className='a'> <BsFillCollectionFill /></a>
        <h5>Featured title</h5>
        <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
        
        <a  className='a'> <BsToggles /></a>
        <h5>Featured title</h5>
        <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
        </Col>
        <Col className='coll'>
        <a  className='a'> <BsBuilding /></a>
        <h5>Featured title</h5>
        <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
        
        <a  className='a'> <BsToggles /></a>
        <h5>Featured title</h5>
        <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p></Col>
      </Row>
    </Container></>
  )
}
