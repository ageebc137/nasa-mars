import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import React from 'react';


function Header() {
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">NASA Mars</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Curiosity</Nav.Link>
      <Nav.Link href="#features">Opportunity</Nav.Link>
      <Nav.Link href="#pricing">Spirit</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
</>
    )
}

export default Header;