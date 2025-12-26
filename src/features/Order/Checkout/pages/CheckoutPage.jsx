import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartSummary from '../../../../shared/components/CartSummary/CartSummary';
import PaymentDetailes from '../components/PaymentDetailes/PaymentDetailes';
import OrderStepper from '../../../../shared/components/CheckoutSteps/CheckoutSteps'; 
import ChoosePayment from '../components/ChoosePayment/ChoosePayment'


function CheckoutPage() {
 


  return (
    <Container className="py-4">
      
      <OrderStepper currentStep={2} /> 
      
      <Row>
 
        <Col lg={9}> 
          <div className="mb-4">
              <PaymentDetailes  />
          </div>
        </Col>
  
        <Col lg={3}>
          <CartSummary />
          <div className="py-4">
            <ChoosePayment />
          </div>
          
        </Col>
      </Row>
    </Container>
  );
}

export default CheckoutPage;