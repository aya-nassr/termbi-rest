// src/features/Order/pages/OrderSuccessPage.jsx
import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsCheckLg } from "react-icons/bs"; 
import OrderStepper from '../../../shared/components/CheckoutSteps/CheckoutSteps';
import { useCartState } from '../Cart/store';

function OrderSuccessPage() {
   const navigate = useNavigate();
   const { clearCart } = useCartState();
   
   // تصفير السلة عند الوصول لصفحة النجاح
   useEffect(() => {
     clearCart();
   }, [clearCart]);
   
  const handleConfirm = () => {
    // الانتقال لصفحة المنتجات
    navigate('/products');
  };
  return (
    <Container className="py-4 text-center">
       <OrderStepper currentStep={4} />

      <div className="mt-5">
        <div 
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
          style={{ 
            width: '100px', 
            height: '100px', 
            backgroundColor: '#dc3545', 
            boxShadow: '0 0 0 15px rgba(220, 53, 69, 0.1)' 
          }}
        >
    
          <BsCheckLg color="white" size={50} />
        </div>

        <h2 className="text-secondary fw-bold py-5">
          Confirmation ordered Successfully
        </h2>

       <div className='text-center mb-5'>
               <Button
                 className='subscribe-btn w-25'
                 onClick={handleConfirm}
               >
                Go Home
               </Button>
             </div>
      </div>
    </Container>
  );
}

export default OrderSuccessPage;