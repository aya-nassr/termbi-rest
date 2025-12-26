import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import './style.css'


function ChoosePayment() {

  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <Card className="mb-3">
      <Card.Body className="text-center">
        <h6 className="fw-bold mb-5">Choose Payment Method</h6>
       
       <Form>
            <div className="d-flex flex-column px-2">
              
              {/* خيار PayPal */}
              <Form.Check 
                type="radio"
                id="paypal"
                label="PayPal"
                value="PayPal"
                name="paymentMethodGroup" // الاسم الموحد ضروري ليعمل كـ Radio
                className="mb-4 custom-radio"
                checked={paymentMethod === 'PayPal'}
                onChange={handlePaymentChange}
              />

              {/* خيار Credit Card */}
              <Form.Check 
                type="radio"
                id="creditCard"
                label="Credit Card"
                value="Credit Card"
                name="paymentMethodGroup"
                className="mb-4 custom-radio"
                checked={paymentMethod === 'Credit Card'}
                onChange={handlePaymentChange}
              />

              {/* خيار Google Pay */}
              <Form.Check 
                type="radio"
                id="googlePay"
                label="Google Pay"
                value="Google Pay"
                name="paymentMethodGroup"
                className="mb-2 custom-radio"
                checked={paymentMethod === 'Google Pay'}
                onChange={handlePaymentChange}
              />

            </div>
          </Form>
      </Card.Body>
    </Card>
  );
}

export default ChoosePayment;