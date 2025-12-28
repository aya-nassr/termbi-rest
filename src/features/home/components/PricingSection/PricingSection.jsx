import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import CheckIcon from '/src/assets/img/check.svg';
import Button from '/src/shared/components/Button/Button';

function PricingSection() {
    const pricingPlans = [
        {
            title: 'Free',
            price: '$0',
            features: ['Services', 'Services', 'Services', 'Services', 'Services'],
            isPremium: false
        },
        {
            title: 'Premium',
            price: '$45',
            features: ['Reservation', 'Ordering', 'Marketing', 'Services', 'Services'],
            isPremium: true
        },
        {
            title: 'Enterprise',
            price: '$75',
            features: ['Services', 'Services', 'Services', 'Services', 'Services'],
            isPremium: false
        }
    ];

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-center fw-bold">
                        <span className='price-title'>Pricing</span> Packages
                    </h2>
                </Col>
            </Row>
            <Row className='p-5 justify-content-center'>
                {pricingPlans.map((plan, index) => (
                    <Col md={4} className="mb-4" key={index}>
                        <Card className={`price-content-box ${plan.isPremium ? 'premium-card' : ''}`}>
                            <Card.Body>
                                <Card.Title className={`fw-bold fs-3 mt-3 ${plan.isPremium ? 'text-white' : 'text-dark'}`}>{plan.title}</Card.Title>
                                <Card.Subtitle className={`mb-2 ${plan.isPremium ? 'text-white' : 'text-muted'}`}>
  {plan.price} 
  <Badge className={`badge-price ${plan.isPremium ? 'text-white' : 'badge-dark-gray'}`}>
    /month
  </Badge>
</Card.Subtitle>
                                <div className='py-5 mt-4'>
                                    <ul className="list-unstyled text-start small mb-5 mt-4">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li className="mb-3" key={featureIndex}>
                                                <img src={CheckIcon} alt="Checkmark" className="custom-check-icon me-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="d-flex justify-content-center">
                                        <Button className={`price-btn ${plan.isPremium ? 'premium-btn' : ''} w-75`}>Select Plan</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default PricingSection;