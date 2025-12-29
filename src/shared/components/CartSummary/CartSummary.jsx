import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { useCartState } from '../../../features/Order/Cart/store/state';
import { useNavigate } from 'react-router-dom';

function CartSummary() {
   const navigate = useNavigate();
     const handleConfirm = () => {
 
    navigate('/checkout');
  };
  const { items, getTotalPrice } = useCartState();
  const location = useLocation();
  
  const totalPrice = getTotalPrice();
  const deliveryFee = 5.00;
  const finalTotal = totalPrice + deliveryFee ;

  if (items.length === 0) {
    return null;
  }

  return (
    <Card>
   
        <h6 className="text-center fw-bold py-3">Order Summary</h6>

      <Card.Body>
        <Row className="mb-2">
          <Col className='fw-bold'>Total price </Col>
          <Col className="text-end text-danger">${totalPrice.toFixed(2)}</Col>
        </Row>
        
        <Row className="mb-2">
          <Col className='fw-bold'>Delivery </Col>
          <Col className="text-end text-danger">${deliveryFee.toFixed(2)}</Col>
        </Row>
          
        <hr />
        
        <Row className="mb-3">
          <Col className='fw-bold'>Grand Total</Col>
          <Col className="text-end text-danger"><strong>${finalTotal.toFixed(2)}</strong></Col>
        </Row>
        
        {location.pathname === '/cart' && (
          <div className="d-grid ">
            <Button variant="danger" onClick={handleConfirm}>
              Checkout
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default CartSummary;