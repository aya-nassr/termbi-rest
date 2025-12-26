import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css';
import AuthSidebar from '/src/shared/components/AuthSidebar/AuthSidebar';
import { useSignUpStepsForm } from '/src/features/auth/hooks/useSignUpStepsForm';
import { useSignUpStepper } from '/src/features/auth/hooks/useSignUpStepper.jsx';

const steps = ['', '', '', ''];

function SignUpForm() {
  const formData = useSignUpStepsForm(steps);
  const { 
    activeStep, 
    completed, 
    register,
    formState: { errors }, 
    getValues, 
    setValue,
    handleNextStep,
    handleFinalSubmit,
    setActiveStep,
  } = formData;

  const { renderStepContent } = useSignUpStepper(
    { register, errors, getValues, setValue },
    { handleNextStep, handleFinalSubmit, setActiveStep, activeStep }
  );

  const handleStep = (step) => () => {
    if (completed[step]) {
      setActiveStep(step);
    }
  };

  return (
    <Row className='flex-column-reverse flex-lg-row g-0 min-vh-100'>
        <Col lg={6} md={12} className='left-panel d-flex align-items-center justify-content-center'> 
          
          <div className='w-100' style={{maxWidth: '500px'}}>
            {/* Congratulations Title */}
            {activeStep === 3 && (
              <h2 className="mb-4 text-center text-success-custom">Congratulations!</h2>
            )}
            
            {/* Custom Stepper */}
            <div className="custom-stepper mb-4">
            <div className="stepper-container">
              {steps.map((_, index) => (
                <div key={index} className="step-item">
                  <div 
                    className={`step-circle ${
                      activeStep === 3 && index <= 3
                        ? 'final-completed'
                        : completed[index]
                        ? 'completed' 
                        : activeStep === index 
                        ? 'active' 
                        : 'inactive'
                    }`}
                    onClick={completed[index] ? handleStep(index) : undefined}
                    style={{ cursor: completed[index] ? 'pointer' : 'default' }}
                  >
                    {completed[index] || (activeStep === 3 && index <= 3) ? (
                      <i className="fas fa-check"></i>
                    ) : (
                      index + 1
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`step-line ${
                      activeStep === 3 && index < 3
                        ? 'final-completed'
                        : completed[index]
                        ? 'completed' 
                        : 'inactive'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
            {renderStepContent()}
          </div>
          
        </Col>

        <AuthSidebar />
    </Row>
  );
}

export default SignUpForm;