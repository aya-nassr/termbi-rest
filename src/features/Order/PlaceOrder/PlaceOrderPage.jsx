// src/features/Order/pages/PlaceOrderPage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCartState } from '../Cart/store';
import OrderStepper from '../../../shared/components/CheckoutSteps/CheckoutSteps';
import useCheckoutStore from '../Checkout/store';

function PlaceOrderPage() {
  const navigate = useNavigate();
  const { items, clearCart } = useCartState();
  const { paymentDetails } = useCheckoutStore();

  const orderInfo = {
    orderCode: "55110022336644 - 55998811",
    name: paymentDetails?.cardholderName || "Customer Name",
    cardNumber: paymentDetails?.cardNumber || "**** **** **** ****",
    expirationDate: paymentDetails?.expirationDate || "MM/YYYY",
  };

  const handleConfirm = () => {
    // 1. هنا ممكن تبعتي الطلب للباك اند (API Call)
    // 2. بعد النجاح، بنفضي السلة
    clearCart();
    // 3. بنحول المستخدم لصفحة النجاح
    navigate('/order-success');
  };

  return (
    <Container className="py-4">
      {/* تغيير الـ Step ليكون place-order ليظهر في الشريط العلوي */}
      <OrderStepper currentStep={3} />

      <div className="text-center mb-4">
        <h2 className="fw-bold ">Your Order is Ready</h2>
      </div>

      <Row className='justify-content-center'>
        <Col lg={5} >
          {/* ملخص بيانات العميل (كما في الصورة) */}
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <h5 className="text-danger mb-4">Order Summary</h5>
              
              <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
                <span >Order Code</span>
                <span >{orderInfo.orderCode}</span>
              </div>
              
              {/* يمكنك استخدام CartSummary هنا للحصول على السعر الإجمالي أو حسابه يدوياً */}
              <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
                <span >Total Price</span>
                <span className="fw-bold text-danger">
                    {/* استدعاء دالة حساب السعر من الستور إذا كانت متاحة أو حسابها هنا */}
                    {items.reduce((acc, item) => acc + (item.price * item.cartQuantity), 0)}$
                </span>
              </div>

              <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
                <span >Cardholder Name</span>
                <span>{orderInfo.name}</span>
              </div>

              <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
                <span >Card Number</span>
                <span>{orderInfo.cardNumber}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span >Expiration Date</span>
                <span>{orderInfo.expirationDate}</span>
              </div>
            </Card.Body>
          </Card>

          <div className='text-center py-4'>
        <Button
          className='subscribe-btn w-50 '
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </div>
        </Col>

      
      </Row>
    </Container>
  );
}

export default PlaceOrderPage;