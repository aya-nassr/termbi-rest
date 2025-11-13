import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import CheckIcon from '/src/assets/img/check.svg';
import Button from 'react-bootstrap/Button';

function PricingSection() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-center fw-bold">
                        <span className='price-title'>Pricing</span> Packages
                    </h2>
                </Col>
            </Row>
            <Row className='p-5 justify-content-center'> {/* Added justify-content-center for better spacing */}
                {/* Free Card */}
                <Col md={4} className="mb-4">
                    <Card className="price-content-box"> {/* Removed inline style */}
                        <Card.Body>
                            <Card.Title className='fw-bold card-title mt-3'>Free</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                $0 <Badge className='badge-price '>/month</Badge>
                            </Card.Subtitle>
                            <Card.Text className='py-5 mt-4'>
                                <ul className="list-unstyled text-start small mb-5 mt-4">
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Services</li>
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Services</li>
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Services</li>
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Services</li>
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Services</li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Button className='price-btn w-75'>Select Plan</Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Premium Card (The Red One) */}
                <Col md={4} className="mb-4 ">
                    <Card className="price-content-box premium-card"> {/* Added 'premium-card' class */}
                        <Card.Body>
                            <Card.Title className='fw-bold card-title mt-3'>Premium</Card.Title>
                            <Card.Subtitle className=" text-muted">
                                $45 <Badge bg="light" text="dark">/month</Badge>
                            </Card.Subtitle>
                            <Card.Text className='py-5 mt-4'>
                                <ul className="list-unstyled text-start mb-5 small mt-4">
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Reservation</li>
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Ordering</li>
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Marketing</li>
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Services</li>
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Services</li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Button className='price-btn premium-btn w-75'>Select Plan</Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="price-content-box"> 
                        <Card.Body >
                            <Card.Title className='fw-bold card-title mt-3'>Enterprise</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                $75 <Badge bg="light" text="dark">/month</Badge>
                            </Card.Subtitle>
                            <Card.Text className='py-5 mt-4'>
                                <ul className="list-unstyled text-start mb-5 small mt-4">
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Services</li>
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Services</li>
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Services</li>
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Services</li>
                                    <li className="mb-3">
                                        <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                        Services</li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Button className='price-btn w-75'>Select Plan</Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PricingSection;