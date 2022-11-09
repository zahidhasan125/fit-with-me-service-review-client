import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from '../../logo.png'

const NavHeader = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(result => { })
            .catch(err => { })
    }
    return (
        <div className='container my-3'>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Link to="/" className='text-decoration-none'><Navbar.Brand style={{position: 'relative'}}> <img src={logo} alt="" style={{width: "80px", position: "absolute", top: "-25px", left: "20px"}} /> FIT WITH ME</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '120px' }}
                            navbarScroll
                        >
                            <Link to="/"><button type="button" className="btn btn-light rounded-pill fw-bold">Home</button></Link>
                            <Link to="/allservices"><button type="button" className="btn btn-light rounded-pill fw-bold">Services</button></Link>
                            <Link to="/blogs"><button type="button" className="btn btn-light rounded-pill fw-bold">Blogs</button></Link>
                            <Link to=""><button type="button" className="btn btn-light rounded-pill fw-bold">Contact Me</button></Link>
                            {
                                user ?
                                    <>
                                        <Link to="/myreviews"><button type="button" className="btn btn-light rounded-pill fw-bold">My Reviews</button></Link>
                                        <Link to="/addservice"><button type="button" className="btn btn-light rounded-pill fw-bold">Add Service</button></Link>
                                        <Button onClick={handleLogout} type="button" variant="outline-danger" className="btn btn-sm rounded-pill fw-bold ms-2">Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to="/login"><button type="button" className="btn btn-light rounded-pill fw-bold">Login</button></Link>
                                        <Link to="/signup"><button type="button" className="btn btn-light rounded-pill fw-bold">Sign Up</button></Link>
                                    </>
                            }
                        </Nav>
                        <Link to="/signup" className="d-flex text-decoration-none">
                            <Button variant="outline-warning" className='rounded-pill'>JOIN NOW</Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavHeader;