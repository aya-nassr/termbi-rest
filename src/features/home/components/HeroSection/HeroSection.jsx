import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './style.css'
export default function HeroSection() {
  return (
    <section className="hero py-5">
<Container >
      <Row>
        <Col lg={6} md={10} className='py-5'>
                            <h1 className="display-2 fw-bold text-white mt-5 mb-5">Get your own restaurant website</h1>
                            <p className="fs-5 mb-5 text-white">Termbi´s booking solution for restaurants makes a lot of your daily business tasks much easier, so that you can fully focus on your guests.</p>
                            <Button className='btn-hero by-5'>Try now</Button>
                          
                       </Col>
      </Row>
    </Container>
    </section>
    
  )
}
