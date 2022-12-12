import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HomeNavigationBar() {
    return (
<>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">FLC</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/findWork">FindWork</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
            <Nav.Link href="/findResource">FindResource</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    
    </>
    );
  }
  
  export default HomeNavigationBar;