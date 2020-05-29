import React from "react";
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";

const NavBar = () => {

  

  return (
    <Navbar  bg="dark" variant="dark">
    <Navbar.Brand  href="/">Books Library</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/signup">SignUp</Nav.Link>
      <Nav.Link href="/signin">SignIn</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  );
};

export default NavBar;
