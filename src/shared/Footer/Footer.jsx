import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import './style.css';
import logo from '/src/assets/img/logo.png';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { useIsLoggedIn } from '../../features/auth/hooks/is-logged-in'; 

function Footer() {
    const { isLoggedIn } = useIsLoggedIn();
    
    return (
       
        <footer className="text-white footer-main-bg"> 
            <Container>

                <Row className="py-4 g-4">
                  <Col lg={3} md={6} xs={12} className="text-center text-lg-start">
    <div className="logo-container">
        <a href="#" className="logo-link d-inline-block">
            <Image 
                src={logo} 
                alt="Termbi Logo" 
                className="logo-image"
            />
        </a>
    </div>
    {isLoggedIn && (
        <>
            <h6 className="fw-bold py-3">Keep in touch</h6>
            <div className="footer-link mb-4">
                <a href="#" className="text-white me-3 ">
                                <FaFacebookF size="1.2em" />
                            </a>
                            <a href="#" className="text-white me-3 ">
                                <FaInstagram size="1.2em" />
                            </a>
                            <a href="#" className="text-white ">
                                <FaXTwitter size="1.2em" />
                            </a>
            </div>
            <div className="text-white opacity-75">
                <p className="mb-1 fw-bold">Provided by <span className="text-danger">termbi</span></p>
                <small>www.termbi.com</small>
            </div>
        </>
    )}
</Col>

                    <Col lg={3} md={6} xs={12} className="text-center text-lg-start">
                        {isLoggedIn ? (
                            <>
                                <h6 className="fw-bold mb-3">Opening Hours</h6>
                                <div className="text-white ">
                                    <div className="mb-2">
                                        <span className="d-block">→ 08 AM TO 12 AM</span>
                                        <small className="text-uppercase">MONDAY TO FRIDAY</small>
                                    </div>
                                    <div>
                                        <span className="d-block">→ 11 AM TO 10 PM</span>
                                        <small className="text-uppercase">SATURDAY & SUNDAY</small>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <h6 className="fw-bold mb-3">Features</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white text-decoration-none py-1 d-block ">Get Website</a></li>
                                    <li><a href="#" className="text-white text-decoration-none py-1 d-block ">Reservation</a></li>
                                    <li><a href="#" className="text-white text-decoration-none py-1 d-block ">Ordering</a></li>
                                    <li><a href="#" className="text-white text-decoration-none py-1 d-block ">Marketing</a></li>
                                </ul>
                            </>
                        )}
                    </Col>

                    <Col lg={3} md={6} xs={12} className="text-center text-lg-start">
                        <h6 className="fw-bold mb-3">Quick Link</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none py-1 d-block ">Home</a></li>
                            <li><a href="#" className="text-white text-decoration-none py-1 d-block ">Services</a></li>
                            <li><a href="#" className="text-white text-decoration-none py-1 d-block ">About us</a></li>
                            <li><a href="#" className="text-white text-decoration-none py-1 d-block ">Contact us</a></li>
                        </ul>
                    </Col>

                    <Col lg={3} md={6} xs={12} className="text-center text-lg-start">
                        <h6 className="fw-bold mb-3">Newsletters</h6>
                        <p className="text-white  mb-3 footer-text-small">
                            Stay up to date with our latest news, receive exclusive deals, and more
                        </p>
                        <Form>
                            <Form.Control
                                className='mb-3 ' 
                                type="email" 
                                placeholder="Enter your email address"
                            />
                            <Button
                                className='subscribe-btn w-75 fw-bold' 
                            >
                                Subscribe
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <div className="footer-bottom py-3 border-top border-secondary">
                <Container>
                    <Row className="align-items-center g-0">
                        <Col md={6} className="text-center text-md-start">
                            <p className="mb-0 opacity-75">
                                Copyright @ 2024 | termbi
                            </p>
                        </Col>
                        <Col md={6} className="text-center text-md-end">
                            <a href="#" className="text-white me-3 ">
                                <FaFacebookF size="1.2em" />
                            </a>
                            <a href="#" className="text-white me-3 ">
                                <FaInstagram size="1.2em" />
                            </a>
                            <a href="#" className="text-white ">
                                <FaXTwitter size="1.2em" />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;