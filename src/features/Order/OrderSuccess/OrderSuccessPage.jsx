
import React, { useEffect } from 'react';
import { Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsCheckLg } from "react-icons/bs"; 
import OrderStepper from '../../../shared/components/CheckoutSteps/CheckoutSteps';
import { useCartState } from '../Cart/store/state';
import './style.css';
import Button from '../../../shared/components/Button/Button';

function OrderSuccessPage() {
   const navigate = useNavigate();
   const { clearCart } = useCartState();
   
   useEffect(() => {
     clearCart();
   }, [clearCart]);
   
  const handleConfirm = () => {
    navigate('/products');
  };
  return (
    <Container className="py-4 text-center">
       <OrderStepper currentStep={4} />

      <div className="mt-5">
        <div 
          className="sucess d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
          
        >
    
          <BsCheckLg color="white" size={50} />
        </div>

        <h2 className="text-secondary fw-bold py-5">
          Confirmation ordered Successfully
        </h2>

       <div className='text-center mb-5'>
               <Button
                 className=' w-25'
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