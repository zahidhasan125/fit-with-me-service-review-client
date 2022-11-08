import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './Login.css'

const Login = () => {
    return (
        <div className='container login-form w-50'>
            <h1 className='text-center fw-bold fs-1'>Login</h1>
            <Form className='mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className='rounded-pill' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" className='rounded-pill' />
                </Form.Group>
                <Button variant="primary" type="submit" className='rounded-pill px-4 fw-bold w-100 mt-4'>
                    LOGIN
                </Button>
            </Form>
            <Button variant="outline-success" className='rounded-pill px-4 fw-bold w-100 mt-4'>LOGIN with <FaGoogle className='ms-2 fs-3'></FaGoogle>OOGLE</Button>
            <Button variant="outline-secondary" className='rounded-pill px-4 fw-bold w-100 mt-4'>LOGIN with <FaGithub className='mx-2 fs-3'></FaGithub> GITHUB</Button>
        </div>
    );
};

export default Login;