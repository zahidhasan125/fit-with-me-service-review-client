import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import './SignUp.css'

const SignUp = () => {

    const { register } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = form.email.value;
        const password = form.password.value;

        register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='container login-form w-50'>
            <h1 className='text-center fw-bold fs-1'>Sign UP</h1>
            <form onSubmit={handleRegister} className='mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" className='rounded-pill' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" className='rounded-pill' />
                </Form.Group>
                <Button variant="primary" type="submit" className='rounded-pill px-4 fw-bold w-100 mt-4'>
                    SIGN UP
                </Button>
            </form>
            <Button variant="outline-success" className='rounded-pill px-4 fw-bold w-100 mt-4'>SIGN UP using <FaGoogle className='ms-2 fs-3'></FaGoogle>OOGLE</Button>
            <Button variant="outline-secondary" className='rounded-pill px-4 fw-bold w-100 mt-4'>SIGN UP using <FaGithub className='mx-2 fs-3'></FaGithub> GITHUB</Button>
        </div>
    );
};

export default SignUp;