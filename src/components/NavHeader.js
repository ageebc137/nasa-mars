import React from 'react';
import { Navbar, Form, FormControl, Button, Nav, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';




function NavHeader() {

    return (
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><img style={{height:"10vh", width: "5vw"}} className="logo" src="https://www.gazettenet.com/getattachment/c2db69d5-0338-444c-a4a7-2b58027e66cd/b6-nasa-logo-biz-072219-ph1" />NASA Mars</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link><Link to="/curiosity">Curiosity</Link></Nav.Link>
                <Nav.Link><Link to="/opportunity">Opportunity</Link></Nav.Link>
                <Nav.Link><Link to="/spirit">Spirit</Link></Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavHeader;