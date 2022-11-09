import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'

const Footer = () => {
    return (
        <div>
            <Card className="text-center border-0">
                <Card.Body>
                    <div>
                        <div className='d-flex justify-content-around align-items-center'>
                            <div>
                                <Link to="/"><img src={logo} alt="" style={{width: "80px"}}/></Link>
                            </div>
                            <div>
                                <Nav className='flex-md-row flex-column'>
                                    <Nav.Item>
                                        <Link to="/" className='text-decoration-none me-4'>Home</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to="" className='text-decoration-none me-4'>About Me</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to="/allservices" className='text-decoration-none me-4'>Services</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to="" className='text-decoration-none me-4'>Contact Me</Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className='d-flex justify-content-around align-items-center flex-md-row flex-column'>
                                <p>Follow me on:</p>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookSquare className='ms-2'></FaFacebookSquare></a>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter className='ms-2'></FaTwitter></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram className='ms-2'></FaInstagram></a>
                            </div>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted">© 2022 Company, Inc</Card.Footer>
            </Card>
        </div>
    );
};

export default Footer;