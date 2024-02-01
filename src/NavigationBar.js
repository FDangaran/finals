import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Grab Web</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="d-flex align-items-center">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success"><FontAwesomeIcon icon={faSearch} /></Button>
                    </Form>
                        <Nav className="d-flex justify-content-end">
                            <Nav.Link href="#restaurants">Restaurants</Nav.Link>
                            <Nav.Link href="#deals">Deals</Nav.Link>
                            <Nav.Link href="#orders">My Orders</Nav.Link>
                            <Button variant="outline-primary"><FontAwesomeIcon icon={faUser} /></Button>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}