import React from 'react';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../Hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import loginImage from "../../images/contact/contact.svg";
import "./LogIn.css";
import logInImage from "../../images/contact/6333043.jpg";

const LogIn = () => {

    // uses of useAuth
    const { signInUsingGoogle, handleRegister, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin, handleResetPassword, processLogIn,handleNameChange } = useAuth();

    const location = useLocation();
    const history = useNavigate();
    const redirect_url = location.state?.from || "/login";

    // handle google signIn
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history(redirect_url);
            })
    }
   


    return (
        <div className='login-page'>
            <div>
                <img className='w-100' src={logInImage} alt="" />
            </div>
            <Container>
                <Row className='d-flex justify-content-center align-items-center py-5'>
                    <Col xl={8} lg={8} md={12}>

                        <form onSubmit={handleRegister}>

                            <h2>Please  {isLogin ? "LogIn" : " Register"}</h2>
                            <div className='form-email'>
                                {!isLogin && <div>
                                    <input onChange={handleNameChange} type="text" placeholder='Type Your Name' />
                                </div>}
                                <div>
                                    <input onBlur={handleEmailChange} type="email" placeholder='Type Your Email' required />
                                </div>
                                <div>
                                    <input onBlur={handlePasswordChange} type="Password" placeholder='Type Your Password' required />
                                </div>
                            </div>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" onChange={toggleLogin} label="Already Registered?" />
                            </Form.Group>

                            <div className='text-danger mb-3'>{error}</div>

                            <Button type='submit' className='login-button'>
                                {/* <span><i className="fa fa-solid fa-hands"></i></span> */}
                                {isLogin ? "LogIn" : " Register"}</Button>

                            <br />
                            <br />
                            <Button onClick={handleResetPassword} type='submit' className='login-button'>
                                Reset Password
                            </Button>
                            <br /><br />
                            <Button className='login-button' onClick={handleGoogleLogIn}>
                                <span><i className="fa fa-brands fa-google"></i></span>
                                Login with Google</Button>
                        </form>

                    </Col>

                    <Col xl={4} lg={4} md={12} className="image-colum">
                        <img className='w-100' src={loginImage} alt="" />
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default LogIn;