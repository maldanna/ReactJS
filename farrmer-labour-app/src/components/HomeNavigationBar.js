import React from "react";
import {Nav,Navbar,NavLink,Container} from 'react-bootstrap';

function HomeNavigationBar() {
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">FLC</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link  href="/findWork">FindWork</Nav.Link>
          <Nav.Link  href="/work">Work</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
  }
  export default HomeNavigationBar;