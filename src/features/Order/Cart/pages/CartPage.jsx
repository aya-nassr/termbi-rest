import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useCartState } from '../store';
import CartItem from '../components/CartItem/CartItem';
import CartSummary from '../../../../shared/components/CartSummary/CartSummary';
import EmptyCart from '../components/EmptyCart/EmptyCart';
import OrderStepper from '../../../../shared/components/CheckoutSteps/CheckoutSteps'; 
import PaymentMethods from '../components/PaymentMethods/PaymentMethods';

function CartPage() {
  const { items, fetchCart } = useCartState();
  
  // جلب بيانات السلة عند تحميل الصفحة
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
        {/* العمود الأيمن للمنتجات (يأخذ 8 أعمدة) */}
        <Col lg={9}>
          <div className="mb-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </Col>
        
        {/* العمود الأيسر للملخص والدفع (يأخذ 4 أعمدة) */}
        <Col lg={3}>
          <CartSummary />
          
          {/* إضافة مسافة بين الملخص وطرق الدفع */}
          <div className="py-4">
            <PaymentMethods />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;