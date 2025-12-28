import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css'; 
import TermbiLogo from '/src/assets/img/group.svg';

const WhyTermbiSection = () => {
  return (
    <div className="section-container-wrapper">
      <div className="why-termbi-content-box">
        <Container>
          <Row className="justify-content-center">
       
            <Col md={10} lg={8} className="py-5 px-3">
              
              <h2 className="termbi-title text-center">
                <span className="why-red ">Why</span> <img src={TermbiLogo} alt="logo" className="termbi-logo" />
              </h2>
              
              <p className="mt-4">
                Termbi's booking tool allows guests to check table availability in real time and then book a table with just a few clicks. Even outside of your business hours. Your effort: Low. Your benefit: Up to 30% more bookings.
              </p>
              <p>
                With Termbi, you are instantly listed on over 100 national and international platforms.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WhyTermbiSection;