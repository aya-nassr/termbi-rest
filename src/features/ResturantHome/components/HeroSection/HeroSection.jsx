import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './style.css';
import PastaImage from '/src/assets/img/pasta.jpg';

function HeroSection() {
  return (
    <Container className='py-5 bg'>
      <Row className="align-items-center flex-column-reverse flex-lg-row">

        <Col lg={6} md={12} className='text-center text-lg-start mb-4 mb-lg-0'>

          <h1 className="mb-4 display-4 display-lg-3">
            Best <span className="text-danger">Food</span>, Best <span className="text-danger">Services</span>!
          </h1>

          <p className="fs-5 mb-4">
            Sandwiches, Fries & Burger with best taste awaits you.
          </p>

          <div className="mb-4">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2">
              <FaMapMarkerAlt className="text-danger me-2" size={20} />
              <span>2255 Nw 2nd Ave, Miami, FL 37214</span>
            </div>

            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <span className="me-2">Rating:</span>
              <span className="text-warning">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="ms-2 fw-bold">5.0</span>
            </div>
          </div>

          <div className="d-flex justify-content-center justify-content-lg-start">
            <Button variant="danger" size="lg" className="px-4 py-2">
              Reserve a table
            </Button>
          </div>
        </Col>

        <Col lg={6} md={12} className="d-flex justify-content-center mb-4 mb-lg-0">

          <Image
            src={PastaImage}
            className='img-fluid'
            alt="Assortment of fast food"
          />

        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;