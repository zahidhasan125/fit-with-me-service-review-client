import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <Card className="text-center border-0">
                <Card.Body>
                    <Card.Text>
                        <div className='d-flex justify-content-around align-items-center'>
                            <div>
                                LOGO
                            </div>
                            <div>
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link>Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link>About Me</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link>Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link>Contact Me</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className='d-flex justify-content-around align-items-center'>
                                <p>Follow us on:</p>
                                <FaFacebookSquare className='ms-2'></FaFacebookSquare>
                                <FaTwitter className='ms-2'></FaTwitter>
                                <FaInstagram className='ms-2'></FaInstagram>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">© 2022 Company, Inc</Card.Footer>
            </Card>
        </div>
    );
};

export default Footer;