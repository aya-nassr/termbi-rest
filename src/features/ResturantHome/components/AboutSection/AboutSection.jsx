import { Container, Row, Col } from 'react-bootstrap';

function AboutSection() {
  return (
    <Container >
      <Row className='fs-5 text-center py-5'>
        <Col>
          <h1 className="text-danger fw-bold mb-4"> About <span className="text-dark">us</span>  </h1>
          <p className="mb-0">Welcome to <span className="text-danger fw-bold ">Termbi</span> , where culinary excellence meets warm hospitality.</p>
          <p className="mb-0">Our journey began with a passion for creating unforgettable dining experiences.</p>
          <p className="mb-0">At <span className="text-danger fw-bold  ">Termbi</span>, we believe in using the freshest ingredients to craft dishes that delight the senses. </p>
     
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;