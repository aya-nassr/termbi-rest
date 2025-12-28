import React from 'react';
import { Col, Image } from 'react-bootstrap';
import TermbiLogo from '/src/assets/img/Group.svg';
import SignupIllustration from '/src/assets/img/signup.svg';

const AuthSidebar = () => (
  <Col lg={6} md={12} className=' right-panel-white d-flex flex-column justify-content-center align-items-center'>
          <div className='text-center '>
            <Image 
              src={TermbiLogo} 
              alt="Termbi Logo" 
              className="img-fluid mb-3"
            />
            <p className='text-muted'>Restaurants Management System</p>
          </div>
          
          <div className='illustration-container'>
            <Image 
              src={SignupIllustration} 
              className="img-fluid" 
              alt="Restaurant illustration"
            />
          </div>
        </Col>
);

export default AuthSidebar;