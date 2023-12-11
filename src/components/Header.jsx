import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import './App.css'

export default function Header(props){


  return (
    <>
      <Navbar id="nav">
      <Container id="none">
        <Navbar.Brand href="/" id="href-nav"><h1>Ben Pavlis' Portfolio</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link id="nav-text" href="/about-me">About Me</Nav.Link>
            <Nav.Link id="nav-text" href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link id="nav-text" href="/contact-me">Contact Me</Nav.Link>
            <Nav.Link id="nav-text" href="/resume">Resume</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </>
  )
}

