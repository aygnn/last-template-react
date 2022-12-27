import React from 'react'
import'./section1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Sectionn1() {
  return (
    <>
    <div  className='birinci'>
      <Container>
      <Row>
        <Col><div className='sekil'>
            <img src='https://dummyimage.com/600x400/343a40/6c757d'></img>
            </div>
            </Col>
        <Col><div className='basliq1'>
            <h2>Our founding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
            </div>
            </Col>
            </Row>
            </Container>
            </div>



            <div  className='ikinci'>
            <Container>
            <Row>

        <Col><div className='basliq1 basliq2'>
            <h2>Growth & beyond</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
            </div>
            </Col>
            <Col><div className='sekil'>
            <img src='https://dummyimage.com/600x400/343a40/6c757d'></img>
            </div>
            </Col>
      
      </Row>

    </Container>
    </div></>
     
  )
}
