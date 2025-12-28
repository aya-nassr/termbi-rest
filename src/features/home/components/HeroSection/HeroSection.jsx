import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import Button from '/src/shared/components/Button/Button';

export default function HeroSection() {
  return (
    <section className="hero py-5 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center justify-content-lg-start">
          <Col lg={6} md={8} sm={10} xs={12} className='py-5'>
            <h1 className="display-2 fw-bold text-white mt-5 mb-5">
              Get your own restaurant website
            </h1>
            <p className="fs-5 mb-5 text-white">
              Termbi´s booking solution for restaurants makes a lot of your daily business tasks much easier, so that you can fully focus on your guests.
            </p>
            
              <Button
                variant='hero'
                size='medium'
                className='fw-bold btn-hero'
              >
                Try now
              </Button>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}
