import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./Contact.css";

const Contact = () => {
    return (
        <div>
            <section>
                <div className='contact-title'>
                    <h3 >Contact</h3>
                    <p>We are here to help with any questions or concerns !
                    </p>
                    <span>
                    <Link className='contact-home' to='/home'>Home </Link>
                       /Contact
                    </span>
                </div>
            </section>
            <section className='contact-mid'>
                <Container className='my-5 '>
                    <Row >
                        <Col xl={4} lg={4} md={12}>
                            <h4>Location :
                            </h4>
                            <h4>Australia</h4>
                            <p>Envato INC 22 Elizabeth St.
                            </p>
                        </Col>
                        <Col xl={4} lg={4} md={12}>
                            <h4>Email :
                            </h4>
                            <h4>Info@Yoursite.Com
                            </h4>
                            <p>Contact with us when you need anything.
                            </p>
                        </Col>
                        <Col xl={4} lg={4} md={12}>
                            <h4>Phone :
                            </h4>
                            <h4>(1800)-456-7890
                            </h4>
                            <p>contact.healing@gmail.com
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <div className='py-4'>
                    <h3 className='text-center contact-form-us mb-3'>Contact <span>Us</span> </h3>
                    <Container>
                        <Row>
                            <Col xl={6} lg={6} md={12}>
                                <Form.Group controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>

                            <Col xl={6} lg={6} md={12}>
                                <Form.Group controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control placeholder="Apartment, studio, or floor" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={4} lg={4} md={12}>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Col>
                            <Col xl={4} lg={4} md={12}>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose....</option>
                                        <option>Bangladesh</option>
                                        <option>USA</option>
                                        <option>Nepal</option>
                                        <option>Pakistan</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col xl={4} lg={4} md={12}>
                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className='text-center mt-3'>
                            <Button variant="secondary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    );
};

export default Contact;