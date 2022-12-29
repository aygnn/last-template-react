import React from 'react'
import'./Section4.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export default function Section4() {
  return (
    <>
      <div className='aside'>
    <aside>  <Container>
      <Row>
        <Col className='inputcol'>
        <div className='products'>
        New products, delivered to you.</div>
        <div className='smallpro'>Sign up for our newsletter for the latest updates.</div></Col>


        <Col className='inputcol'><div className='inputs'> 
        <div className='analiz'>
        <InputGroup className="input">
        <Form.Control
          placeholder="Email address..."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">Sign Up</InputGroup.Text>
      </InputGroup></div>
      <div className='smallpro'>We care about privacy, and will never share your data.</div>
      </div></Col>

      </Row>
    </Container>
        </aside>
    </div></>
  )
}
