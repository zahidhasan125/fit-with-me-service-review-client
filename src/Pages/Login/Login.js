import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Login.css'

const Login = () => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const { user, login, loginWithProvider } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                const currentUser = { email: user.email };
                fetch('http://localhost:5000/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('service-review-token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => console.error(err))
    }

    const handleGoogleSignIn = () => {
        loginWithProvider(googleProvider)
            .then(result => {
                const user = result.user;
                const currentUser = { email: user.email };
                navigate(from, { replace: true });
                fetch('http://localhost:5000/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('service-review-token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => console.error(err))
    }

    const handleGithubSignIn = () => {
        loginWithProvider(githubProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                const currentUser = { email: user.email };
                fetch('http://localhost:5000/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('service-review-token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='container login-form w-md-50 '>
            {
                user ?
                    <>
                        <h2 className='fw-bold d-block text-center'>You're already Logged In</h2>
                    </>
                    :
                    <>
                        <Helmet>
                            <title>Login - Fit With Me</title>
                        </Helmet>
                        <div className='bg-warning my-5 py-2 text-center rounded-4'>
                            <h2 className='text-black fw-bold'>LOGIN</h2>
                        </div>
                        <Form onSubmit={handleLogin} className='mx-auto'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" className='rounded-pill' required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" className='rounded-pill' required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='rounded-pill px-4 py-2 fw-bold w-100 mt-4'>
                                LOGIN
                            </Button>
                        </Form>
                        <ButtonGroup className='w-100 rounded-pill mt-4'>
                            <Button onClick={handleGoogleSignIn} variant="outline-success" className='px-4 fw-bold rounded-pill rounded-end'>LOGIN with <FaGoogle className='ms-2 fs-3 '></FaGoogle><span className='d-sm-none'>G</span>OOGLE</Button>
                            <Button onClick={handleGithubSignIn} variant="outline-secondary" className='px-4 fw-bold rounded-pill rounded-start '>LOGIN with <FaGithub className='mx-2 fs-3'></FaGithub> GITHUB</Button>
                        </ButtonGroup>
                    </>
            }
        </div >
    );
};

export default Login;