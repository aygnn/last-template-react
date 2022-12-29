import React from 'react'
import'./Section3.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Section3() {
  return (
   <> <Container className='lacasa'>
   <Row >
     <Col className='blog'>
        <div className='metn'>
            <h2>From our blog</h2>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
     </div>
     </Col>
   </Row>

   
   <Row className='cartlar' >
    <Col className='colls'>
     <Card style={{  height:'501px' ,boxShadow:' 0px 2px 34px -19px'}}>
      <Card.Img variant="top" src="https://dummyimage.com/600x350/ced4da/6c757d" />
      <Card.Body>
     <span> <a className='news' href='#'>News</a></span>

        <Card.Title className='Title'>Blog post title</Card.Title>
        <Card.Text className='Text'>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
        <div className='card-footer'>
            <img className='cardimg' src='https://dummyimage.com/40x40/ced4da/6c757d'></img>
            <div className='footer'>
            <div className='small'>Kelly Rowan</div>
            <div className='muted'>March 12, 2022 · 6 min read</div>
            </div>
            </div>
    </Card>
     </Col> 
     
     
     <Col className='colls'>
     <Card style={{height:'501px',boxShadow:' 0px 2px 34px -19px' }}>
      <Card.Img variant="top" src="https://dummyimage.com/600x350/adb5bd/495057" />
      <Card.Body>
        <span><a className='news'  href='#'>Media</a></span>
        <Card.Title className='Title'>Another blog post title</Card.Title>
        <Card.Text  className='Text'>
        This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
      <div className='card-footer'>
            <img className='cardimg' src='https://dummyimage.com/40x40/ced4da/6c757d'></img>
            <div className='footer'>
            <div className='small'>Josiah Barclay</div>
            <div className='muted'>March 23, 2022 · 4 min read</div>
            </div>
            </div>
    </Card>
     </Col>


     <Col className='colls'>
     <Card style={{  height:'501px',boxShadow:' 0px 2px 34px -19px'}}>
      <Card.Img variant="top" src="https://dummyimage.com/600x350/6c757d/343a40" />
      <Card.Body>
      <span><a className='news' href='#'>News</a></span>

        <Card.Title className='Title'>The last blog post title is a little bit longer than the others</Card.Title>
        <Card.Text  className='Text'>
        Some more quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
      <div className='card-footer'>
            <img className='cardimg' src='https://dummyimage.com/40x40/ced4da/6c757d'></img>
            <div className='footer'>
            <div className='small'>Evelyn Martinez</div>
            <div className='muted'>March 12, 2022 · 6 min read</div>
            </div>
            </div>
    </Card>
     </Col>
   </Row>
 </Container>
   </>
  )
}
