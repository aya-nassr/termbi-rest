import React from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';
import './style.css';
import Button from '/src/shared/components/Button/Button';
import FormField from '/src/shared/components/form/FormField';
import { useContactForm } from '../hooks/useContactForm';
import PhoneIcon from '/src/assets/img/phone.svg'; 
import FaxIcon from '/src/assets/img/fax.svg';
import EmailIcon from '/src/assets/img/email.svg';


function Contact() {
  const { register, handleSubmit, errors } = useContactForm();

  return (
    <Container className='py-5'>
      <Row className='flex-column-reverse flex-lg-row g-5 align-items-stretch'>
        
        <Col lg={6} md={12}> 
          <h2 className='fw-bold mb-3'>
            <span className='contact-title fw-bold'>Contact</span>
            Us
          </h2>
          <p className='mb-4'>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
          </p>
          
          <Form onSubmit={handleSubmit}>
            <FormField error={errors.name?.message}>
              <Form.Control 
                type="text" 
                placeholder="Name *" 
                className='form-input mb-3'
                isInvalid={!!errors.name}
                {...register('name')}
              />
            </FormField>
            
            <FormField error={errors.email?.message}>
              <Form.Control 
                type="email" 
                placeholder="Email" 
                className='form-input mb-3'
                isInvalid={!!errors.email}
                {...register('email')}
              />
            </FormField>
            
            <FormField error={errors.phone?.message}>
              <Form.Control 
                type="text" 
                placeholder="Phone number *" 
                className='form-input mb-3'
                isInvalid={!!errors.phone}
                {...register('phone')}
              />
            </FormField>
            
            <FormField error={errors.source?.message}>
              <Form.Select 
                aria-label="How did you find us?" 
                className='form-input mb-3'
                isInvalid={!!errors.source}
                {...register('source')}
              >
                <option value="">How did you find us?</option>
                <option value="search">Search Engine</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
              </Form.Select>
            </FormField>
            
            <Button
              type="submit"
              variant='subscribe'
              fullWidth
              size='large'
              className='fw-bold'
            >
              SEND
            </Button>
          </Form>

          <Row className='py-5'> 
            <Col xs={12} md={4} className='d-flex flex-row align-items-start mb-4 mb-md-0'> 
              <Image src={PhoneIcon} alt="Phone" className='me-3 contact-icon-img' /> 
              <div className='small'> 
                <p className='fw-bold mb-0 '>PHONE</p>
                <p className='text-secondary '>+44 543 871 1234</p>
              </div>
            </Col>

            <Col xs={12} md={4} className='d-flex flex-row align-items-start mb-4 mb-md-0'>
              <Image src={FaxIcon} alt="Fax" className='me-3 contact-icon-img' />
              <div className='small'>
                <p className='fw-bold mb-0'>FAX</p>
                <p className='text-secondary'>+44 543 871 1234</p>
              </div>
            </Col>

            <Col xs={12} md={4} className='d-flex flex-row align-items-start'>
              <Image src={EmailIcon} alt="Email" className='me-3 contact-icon-img' />
              <div className='small'>
                <p className='fw-bold mb-0'>EMAIL</p>
                <p className='text-secondary '>info@termbi.com</p>
              </div>
            </Col>
          </Row>
        </Col>

        <Col lg={6} md={12} className='d-flex align-items-stretch justify-content-center'>
            <Image 
              src="src/assets/img/contact.jpg" 
              className="contact-img img-fluid rounded shadow-lg w-100 h-100" 
             
            />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;