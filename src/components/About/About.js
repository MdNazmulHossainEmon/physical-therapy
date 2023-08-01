import React from 'react';
import "./About.css"
import { Col, Container, Row } from 'react-bootstrap';
import about_doctor from "../../images/about/doctor.jpg";
import signature from "../../images/about/signature.jpg";
import clinic from "../../images/about/clinic.jpg";
import staff1 from "../../images/about/staff-1.jpg";
import staff2 from "../../images/about/staff-2.jpg";
import staff3 from "../../images/about/staff-3.jpg";
import medi from "../../images/about/medical.jpg";

const About = () => {
    return (
        <div>
            {/* About us top image*/}
            <section>
                <div className='about-us-top'>
                    <div>
                        <span>
                        <img className='w-100' src={medi} alt="" />
                        </span>
                   

                    </div>
                   
                </div>
            </section>
            {/* About Our clinic */}
            <section>
                <div className='py-5'>
                    <Container>
                        <Row className='our-clinic'>
                            <Col xl={4} lg={4} md={12}>
                                <div>
                                    <img src={about_doctor} alt="" />
                                </div>
                            </Col>
                            <Col xl={8} lg={8} md={12}>
                                <div className='mt-4'>
                                    <h3 >About Our <span>Clinic</span>
                                    </h3>
                                    <h5>Clinic, an organized medical service offering diagnostic, therapeutic, or preventive outpatient services.
                                    </h5>
                                    <p>information about allergies, illnesses, surgeries, immunizations, and results of physical exams and tests. It may also include information about medicines taken and health habits, such as diet and exercise.Insurer UnitedHealth to buy Everett Clinic operator for $4.9 billion as lines blur in health care. UnitedHealth will acquire DaVita's physician group for about $4.9 billion in cash
                                    </p>
                                    <h3 >Our <span>History</span>
                                    </h3>
                                    <h5>A record of information about a person's health.
                                    </h5>
                                    <p>information about allergies, illnesses, surgeries, immunizations, and results of physical exams and tests. It may also include information about medicines taken and health habits, such as diet and exercise.Insurer UnitedHealth to buy Everett Clinic operator for $4.9 billion as lines blur in health care. UnitedHealth will acquire DaVita's physician group for about $4.9 billion in cash
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            {/* Treatment Pain */}
            <section>
                <div className='treatment-pain '>

                    <div className='text-center text-white'>
                        <h3>We Offer Different Treatment to your Pain
                        </h3>
                        <p className='text-white'>Physical therapy is often one of the best choices you can make when you have long-term pain (also called chronic pain) or an injury.
                            <br />
                            It can make you stronger and help you move and feel better</p>
                    </div>
                </div>
            </section>
            {/* Expert Doctor */}
            <section>
                <div className='py-5'>
                    <Container>
                        <Row>
                            <Col xl={5} lg={5} md={12}>
                                <img className='w-100' src={clinic} alt="" />
                            </Col>
                            <Col xl={7} lg={7} md={12}>
                                <div className='mt-5'>
                                    <h3>Hello, I’m Doctor Julley
                                    </h3>
                                    <h5 className='text-primary mb-4'><i>Expert Clinical chiropractor in NY
                                    </i></h5>
                                    <p>Chiropractic mind is the act of utilizing spinal arrangement to ease a wide assortment of physical infirmities, including muscle strain, neck torment, endless back torment, and then some. This is expert by altering the position of the spinal segment to its appropriate shape, giving a non-intrusive
                                    </p>
                                    <p>At Healing Chiropractic our chiropractic group is prepared to address with you to talk about your issues. We will outline a program that is appropriate for you. We anticipate meeting you.
                                    </p>
                                    <img src={signature} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            {/* Our Staff */}
            <section>
                <div>
                    <Container>
                        <div className='text-center my-4 our-clinic'>
                            <h3 >Our <span>Staffs</span> </h3>
                            <p> pA staff physical therapist works with people who are the victims of an accident, live <br />
                                with debilitating diseases, and have been confined to bed rest  <br />
                                for a long period of time, among other conditions</p>
                        </div>
                        <Row className='staff-images mt-5'>
                            <Col xl={4} lg={4} md={12}>
                                <div className='mb-4'>
                                    <img className='w-100 ' src={staff1} alt="" />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={12}>
                                <div className='mb-4'>
                                    <img className='w-100 ' src={staff2} alt="" />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={12}>
                                <div className='mb-4'>
                                    <img className='w-100 ' src={staff3} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            {/* problem sport */}
            <section>
                <div className='problem-sport'>
                    <Container>
                        <div className='text-white'>
                            <h6>Any problem by a sport, work accident etc._
                            </h6>
                            <h3 >we welcome the chance to serve you.
                            </h3>
                        </div>
                    </Container>

                </div>
            </section>
        </div>
    );
};

export default About;