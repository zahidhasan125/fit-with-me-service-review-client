import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { AiOutlineSend } from "react-icons/ai";

const ContactMe = () => {
    const handleContactMe = event => {
        event.preventDefault();
        toast.success("Message Send Successfully! I'll contact with you shortly. Thanks!!");
        event.target.reset();

    }
    return (
        <div>
            <div className='container login-form w-md-50'>
                <Helmet>
                    <title>Contact Me - Fit With Me</title>
                </Helmet>
                <div className='bg-warning my-5 py-2 text-center rounded-4'>
                    <h2 className='text-black fw-bold'>CONTACT ME</h2>
                </div>
                <form onSubmit={handleContactMe} className='mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Full Name" className='rounded-pill' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email Address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" className='rounded-pill' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDetails" label="Comments">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            name='message'
                            placeholder="Leave a message here"
                            style={{ height: '100px' }}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='rounded-pill px-4 py-2 fw-bold w-100 mt-4'>
                        Send <AiOutlineSend className='fs-4'></AiOutlineSend>
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;