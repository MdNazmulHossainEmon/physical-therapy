import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react';
import "./Home.css";
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import banner1 from "../../images/banners/banner1.jpg";
import banner2 from "../../images/banners/banner2.jpg";
import banner3 from "../../images/banners/banner3.jpg";
import team_member from "../../images/banners/doctor-team.jpg";
import HomeService from '../HomeService/HomeService';

const Home = () => {
  const [homeServices, setHomeServices] = useState([]);
  useEffect(() => {
    fetch("./Services.JSON")
      .then(res => res.json())
      .then(data => setHomeServices(data))
  }, [])
  return (
    <div>
      {/* Banner section */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption className='text-banner-title'>
            <h3 >We Give Solution To Your Pain
            </h3>
            <p>Dr. Robert Joe is prepared to suggest remedial and rehabilitative activities, and also to give wholesome, dietary and way of life directing.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption className='text-banner-title'>
            <h3>Professional Team Of Experts
            </h3>
            <p>Dr. Robert Joe is prepared to suggest remedial and rehabilitative activities, and also to give wholesome, dietary and way of life directing.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
          <Carousel.Caption className='text-banner-title'>
            <h3>Physio Therapy Of Services From Professional
            </h3>
            <p>
              Dr. Robert Joe is prepared to suggest remedial and rehabilitative activities, and also to give wholesome, dietary and way of life directing.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Our Services */}

      <Container className='pt-5'>
        <h2 className='text-center mb-5 home-service-title'>Our Most Popular <span>Services</span> </h2>
        {
          homeServices.length === 0 ? <div className='text-center'>
            <Spinner animation="border" variant="dark" />
          </div>
            :
            <Row xl={3} lg={3} md={2} sm={1}>

              {
                homeServices.map(homeService => <HomeService
                  key={homeService.id}
                  homeService={homeService}
                ></HomeService>)
              }
            </Row>
        }
      </Container>

      {/* The Best Team */}
      <section>
        <div className='best-team pt-4'>
          <h2 className='text-center mb-5'>THE BEST <span>TEAM FOR YOU</span></h2>
          <img className='w-100' src={team_member} alt="" />
        </div>
      </section>
      {/* Our Advantages */}
      <section>
        <div>
          <Container>
            <Row className='pt-5'>
              <h2 className='advantage-title mb-5 text-center'>Our <span>Advantages</span> </h2>
              <Col className='mb-3' xl={4} lg={4} md={6} sm={12} xs={12}>
                <div className='advantage  h-100'>
                  <h5>Personalized Treatment
                  </h5>
                  <p>You will receive a full individualized treatment
                  </p>
                </div>
              </Col>
              <Col className='mb-3' xl={4} lg={4} md={6} sm={12} xs={12}>
                <div className='advantage   h-100'>
                  <h5>Licensed Therapists
                  </h5>
                  <p>Your treatment will be performed by only licensed therapists
                  </p>
                </div>
              </Col>
              <Col className='mb-3' xl={4} lg={4} md={6} sm={12} xs={12}>
                <div className='advantage   h-100'>
                  <h5>Experience Staff
                  </h5>
                  <p>Our therapists are trained and certified in therapy technique
                  </p>
                </div>
              </Col>
              <Col className='mb-3' xl={4} lg={4} md={6} sm={12} xs={12}>
                <div className='advantage   h-100'>
                  <h5>Comfortable Clinic
                  </h5>
                  <p>Our clinic feels like a comfortable health & fitness center
                  </p>
                </div>
              </Col>
              <Col className='mb-3' xl={4} lg={4} md={6} sm={12} xs={12}>
                <div className='advantage   h-100'>
                  <h5>Practitioners Network
                  </h5>
                  <p>We will work closely with all your health practitioners
                  </p>
                </div>
              </Col>
              <Col className='mb-3' xl={4} lg={4} md={6} sm={12} xs={12}>
                <div className='advantage  h-100'>
                  <h5>Therapy Goals
                  </h5>
                  <p>Setting goals is the best way to enjoy a successful outcome
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Home;