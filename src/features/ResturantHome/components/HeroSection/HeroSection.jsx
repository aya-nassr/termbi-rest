import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'; 
import './style.css';

function HeroSection() {
  return (
    <Container className='py-5 bg'>
      <Row className="align-items-center flex-column-reverse flex-lg-row">
     
        <Col md={6} className='text-cen' >
         
          <h1 className="mb-4">
            Best <span className="text-danger">Food</span>, Best <span className="text-danger">Services</span>!
          </h1>

          <p className="fs-5 mb-4">
            Sandwiches, Fries & Burger with best taste awaits you.
          </p>

          <div className="mb-4">
            <div className="d-flex align-items-center mb-2">
              <FaMapMarkerAlt className="text-danger me-2" size={20} />
              <span >2255 Nw 2nd Ave, Miami, FL 37214</span>
            </div>
         
            <div className="d-flex align-items-center">
              <span className="me-2 ">Rating:</span>
              <span className="text-warning">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar  /> 
              </span>
              <span className="ms-2 fw-bold">5.0</span>
            </div>
          </div>
    
          <Button variant="danger"  className="w-25">
            Reserve a table
          </Button>
        </Col>


        <Col md={6} className="d-flex justify-content-center">
         
          <div className="circular-image-container">
           
            <Image 
              src="/src/assets/img/pasta.jpg" 
              fluid 
              alt="Assortment of fast food including burgers, fries, donuts, and pizza" 
              className="circular-image-content"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;