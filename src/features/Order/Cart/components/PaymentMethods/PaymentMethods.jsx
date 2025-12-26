import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './PaymentMethods.css';

function PaymentMethods() {
  const [selected, setSelected] = useState('');

  return (
    <Card className="mb-3">
      <Card.Body className="text-center">
        <h6 className="fw-bold mb-3">We Accept</h6>
        <div className="d-flex justify-content-center gap-2">
          <img src="src/assets/img/visa.png" className={`payment-img ${selected === 'visa' ? 'selected' : ''}`} onClick={() => setSelected('visa')} />
          <img src="src/assets/img/master.png" className={`payment-img ${selected === 'master' ? 'selected' : ''}`} onClick={() => setSelected('master')} />
          <img src="src/assets/img/paypal.png" className={`payment-img ${selected === 'paypal' ? 'selected' : ''}`} onClick={() => setSelected('paypal')} />
          <img src="src/assets/img/payoneer.png" className={`payment-img ${selected === 'payoneer' ? 'selected' : ''}`} onClick={() => setSelected('payoneer')} />
          <img src="src/assets/img/pay.png" className={`payment-img ${selected === 'pay' ? 'selected' : ''}`} onClick={() => setSelected('pay')} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default PaymentMethods;