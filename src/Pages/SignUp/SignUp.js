import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './SignUp.css'

const SignUp = () => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const { user, register, updateUserInfo, loginWithProvider, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const displayName = form.name.value || "";
        const photoURL = form.photoURL.value || "";
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = { displayName, photoURL }

        register(email, password)
            .then(result => {
                const user = result.user;
                if (user?.uid) {
                    updateUserInfo(userInfo)
                        .then(() => {
                            toast.success('Registered Successfully. Please Login')
                            logout()
                                .then(() => {
                                    navigate("/login", { replace: true })
                                })
                                .catch(err => console.error(err))
                        })
                        .catch(() => { })
                }
            })
            .catch(err => console.error(err))
    }

    const handleGoogleSignIn = () => {
        loginWithProvider(googleProvider)
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
        <div className='container login-form w-md-50'>
            <Helmet>
                <title>Sign Up - Fit With Me</title>
            </Helmet>
            {
                user ?
                    <>
                        <h2 className='fw-bold d-block text-center'>You're already Logged In</h2>
                    </>
                    :
                    <>
                        <div className='bg-warning my-5 py-2 text-center rounded-4'>
                            <h2 className='text-black fw-bold'>SIGN UP</h2>
                        </div>
                        <form onSubmit={handleRegister} className='mx-auto'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter Full Name" className='rounded-pill' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control type="text" name='photoURL' placeholder="Enter Your Photo URL" className='rounded-pill' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Email Address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" className='rounded-pill' required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" className='rounded-pill' required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='rounded-pill px-4 py-2 fw-bold w-100 mt-4'>
                                SIGN UP
                            </Button>
                        </form>
                        <ButtonGroup className='w-100 rounded-pill mt-4'>
                            <Button onClick={handleGoogleSignIn} variant="outline-success" className='px-4 fw-bold rounded-pill rounded-end'>SIGN UP using <FaGoogle className='ms-2 fs-3'></FaGoogle>OOGLE</Button>
                            <Button onClick={handleGithubSignIn} variant="outline-secondary" className='px-4 fw-bold rounded-pill rounded-start '>SIGN UP using <FaGithub className='mx-2 fs-3'></FaGithub> GITHUB</Button>
                        </ButtonGroup>
                    </>
            }
        </div>
    );
};

export default SignUp;