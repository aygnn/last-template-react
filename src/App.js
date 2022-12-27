
import './App.css';
import { Link,Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
    <Navbar className='Navbar' bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand  id='start'href="#">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#"> <Link to={'/'}><a className='about'>Home</a> </Link></Nav.Link>
            <Nav.Link href="#"><Link to={'About'}> <a className='about'>About</a></Link></Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">FAQ</Nav.Link>
            <NavDropdown title="Blog" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Blog Home</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Blog Post</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Portfolio" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Portfolio Overview</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Portfolio Item</NavDropdown.Item>
              </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>

    <footer>
      <Container>
      <Row>
        <Col className='foot hello'>Copyright © Your Website 2022</Col>
        <Col className='foot'>
        <a>Privacy</a>
        <span className='span'>·</span>
        <a>Terms</a>
        <span className='span'>·</span>

        <a>Contact</a>

        </Col>
      </Row>
    </Container>
      </footer>
    </>

  );
}

export default App;
