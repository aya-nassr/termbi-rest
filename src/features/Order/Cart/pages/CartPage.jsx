import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useCartState } from '../store/state';
import CartItem from '../components/CartItem/CartItem';
import CartSummary from '../../../../shared/components/CartSummary/CartSummary';
import EmptyCart from '../components/EmptyCart/EmptyCart';
import OrderStepper from '../../../../shared/components/CheckoutSteps/CheckoutSteps';
import PaymentMethods from '../components/PaymentMethods/PaymentMethods';

function CartPage() {
  const { items, fetchCart } = useCartState();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <Container className="py-4">

      <OrderStepper currentStep={1} />

      <Row>

        <Col lg={9}>
          <div className="mb-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </Col>
        <Col lg={3}>
          <CartSummary />

          <div className="py-4">
            <PaymentMethods />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;