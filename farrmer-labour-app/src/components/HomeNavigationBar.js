import React from "react";
import {Nav,Navbar,Container} from 'react-bootstrap';
import { Routes,Route,Link,NavLink } from "react-router-dom";
import './HomeNavigationbarStyle.css';

import About from './About';
import Profile from './Profile';
import HomePage from './HomePage';
import FindResource from './FindResource';
import Work from './Work';
import Help from './Help';
import Signup from './Signup';
import Login from "./Login";


function HomeNavigationBar() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">FLC</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link  as={NavLink} to="/findWork">FindWork</Nav.Link>
            <Nav.Link  as={NavLink} to="/work">Work</Nav.Link>
            <Nav.Link  as={NavLink} to="/findResource">FindResource</Nav.Link>
            <Nav.Link  as={NavLink} to="/help">Help</Nav.Link>
            <Nav.Link  as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link  as={NavLink} to="/signup">Signup</Nav.Link>
            <Nav.Link  as={NavLink} to="/login">Login</Nav.Link>
            <Nav.Link  as={NavLink} to="/profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/findWork" element={<home />} />
        <Route path="/findResource" element={<FindResource />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
    );
  }
  export default HomeNavigationBar;