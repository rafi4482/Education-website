import React from 'react';
import { Container, Nav, NavDropdown,Navbar as Appbar, Stack } from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      //navigation bar
        <Appbar bg="light" expand="lg">
        <Container fluid>
              <Appbar.Brand href="#">RITI</Appbar.Brand>
              <Appbar.Toggle aria-controls="navbarScroll" />
              <Appbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Stack direction="horizontal" gap={3}>
        <NavLink
            to="/home"
            activeStyle={{
            fontWeight: "bold",
            color: "red"
            }}>
               Home
       </NavLink>
       <NavLink
            to="/about"
            activeStyle={{
            fontWeight: "bold",
            color: "red"
             }}
           >
               About
      </NavLink>
      <NavLink
        to="/services"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >
        Contact
      </NavLink>
</Stack>        
      </Nav>     
    </Appbar.Collapse>
  </Container>

 
</Appbar>

    );
};

export default Navbar;