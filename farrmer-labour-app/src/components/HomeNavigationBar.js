import React from "react";
import {Nav,Navbar,Container} from 'react-bootstrap';
import { Routes,Route,Link,NavLink } from "react-router-dom";
import './HomeNavigationbarStyle.css';
import {NavRouteItems} from "./NavRouteItems";
import {MenuItems} from "./MenuItems";

function HomeNavigationBar() {
    return (
      <>
      <div className="navbarDiv">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">FLC</Navbar.Brand>
          <Nav className="ml-auto">
            {
              MenuItems.map( (item,index)=> {
                return (<Nav.Link  as={NavLink} to={item.path}>{item.title}</Nav.Link>);
              }
              )
            }
          </Nav>

        </Container>
      </Navbar>
      </div>
      <Routes>
            {
              NavRouteItems.map((item,index)=>{
                return (
                  <Route path={item.path} element={<item.component />} /> 
                )
              }) 
            }
      </Routes>
    </>
    );
  }
  export default HomeNavigationBar;