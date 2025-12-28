import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

function DashboardSection() {
  return (
    <Container className="my-5">
      <Row className="mb-5">
        <Col>
          <h2 className="text-center fw-bold">
            <img
              src="/src/assets/img/group.svg"
              alt="Group of companies icon"
              className="group-termbi me-2"
            />
            Features
          </h2>
        </Col>
      </Row>

      <Row className="align-items-start flex-column-reverse flex-lg-row">
       
        <Col lg={5} md={6} xs={12} className="mb-4 text-center text-lg-start">
          <h2 className="fw-bold mb-4">Dashboard</h2>
          <p className="w-100 w-lg-75 py-5 mx-auto mx-lg-0">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>

        <Col lg={7} md={6} xs={12} className="text-center mb-4 mb-lg-0">
          <img
            src="/src/assets/img/dash.jpg"
            alt="Dashboard screenshot"
            className="img-fluid shadow-lg rounded dashboard-img"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardSection;
