import { Card, Row, Button, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormField from '../../../../../shared/components/form/FormField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import paymentConfig from './config';
import './style.css'
import { useNavigate } from 'react-router-dom';
import useCheckoutStore from '../../store';

function PaymentDetailes() {
   const navigate = useNavigate();
   const { setPaymentDetails } = useCheckoutStore();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(paymentConfig.validationSchema),
    mode: 'onTouched'
  });

  const onSubmit = (data) => {
    setPaymentDetails(data);
    navigate('/place-order');
  };

  return (
    <div>
      <Card className="mb-3 shadow-sm bg-card"> 
        <Card.Body>
          <h6 className='text-center fw-bold mb-3'>Payment Detailes</h6>
          
          <Form>
            <FormField 
              label="Cardholder Name" 
              required 
              error={errors.cardholderName?.message}
            >
              <Form.Control 
                type="text" 
                placeholder="Enter Cardholder name" 
                isInvalid={!!errors.cardholderName}
                {...register('cardholderName')}
              />
            </FormField>
            
            <FormField 
              label="Card Number" 
              required 
              error={errors.cardNumber?.message}
            >
              <Form.Control 
                type="text" 
                placeholder="0000-0000-0000-0000" 
                isInvalid={!!errors.cardNumber}
                {...register('cardNumber')}
              />
            </FormField>
            
            <Row>
              <Col>
                <FormField 
                  label="Expiration Date" 
                  required 
                  error={errors.expirationDate?.message}
                >
                  <Form.Control 
                    placeholder="MM/YYYY" 
                    isInvalid={!!errors.expirationDate}
                    {...register('expirationDate')}
                  />
                </FormField>
              </Col>
              <Col>
                <FormField 
                  label="CVV" 
                  required 
                  error={errors.cvv?.message}
                >
                  <Form.Control 
                    placeholder="123" 
                    isInvalid={!!errors.cvv}
                    {...register('cvv')}
                  />
                </FormField>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <div className='text-center py-5'>
        <Button
          className='subscribe-btn w-50 fw-bold'
          onClick={handleSubmit(onSubmit)}
          type="button"
        >
          Place order
        </Button>
      </div>
    </div>
    
  );
}

export default  PaymentDetailes;