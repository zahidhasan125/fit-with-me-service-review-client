import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavHeader = () => {
    return (
        <div className='container my-3'>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                <Link to="/" className='text-decoration-none'><Navbar.Brand>FITNESS GYM</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '120px' }}
                            navbarScroll
                        >
                            <Link to="/"><button type="button" className="btn btn-light fw-bold">Home</button></Link>
                            <Link to="/allservices"><button type="button" className="btn btn-light fw-bold">Services</button></Link>
                            <Link to="/blogs"><button type="button" className="btn btn-light fw-bold">Blogs</button></Link>
                            <Link to=""><button type="button" className="btn btn-light fw-bold">Contact Me</button></Link>
                            <Link to="/login"><button type="button" className="btn btn-light fw-bold">Login</button></Link>
                            <Link to="/signup"><button type="button" className="btn btn-light fw-bold">Sign Up</button></Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 rounded-pill"
                                aria-label="Search"
                            />
                            <Button variant="outline-warning" className='rounded-pill'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavHeader;