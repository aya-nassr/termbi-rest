import React from 'react';
import Step1_RestaurantInfo from '../components/sign-up-form/Steps/Step1_RestaurantInfo';
import Step2_UserInfo from '../components/sign-up-form/Steps/Step2_UserInfo';
import Step3_SetPassword from '../components/sign-up-form/Steps/Step3_SetPassword';
import Step4_Success from '../components/sign-up-form/Steps/Step4_Success';
import menuIcon from '/src/assets/img/usa.png';

export const useSignUpStepper = (formProps, handlers) => {
  const { register, errors, getValues, setValue } = formProps;
  const { handleNextStep, handleFinalSubmit, activeStep } = handlers;

  const DropdownImage = (
    <img 
      src={menuIcon} 
      alt="Language Selector" 
      height="30"
      width="30"
    />
  );

  const onSubmitForm = (values) => {
    console.log("Final data submitted to API:", values);
    handlers.setActiveStep(3);
  };

  const commonProps = {
    register, 
    errors,
    getValues, 
    setValue,
    DropdownImage,
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <Step1_RestaurantInfo {...commonProps} handleNextStep={handleNextStep} />;
      case 1:
        return <Step2_UserInfo {...commonProps} handleNextStep={handleNextStep} />;
      case 2:
        return <Step3_SetPassword 
          {...commonProps} 
          onSubmitHandler={handleFinalSubmit(onSubmitForm)} 
        />;
      case 3:
        return <Step4_Success {...commonProps} isFinalView={true} />;
      default:
        return <div>An error occurred.</div>; 
    }
  };

  return {
    renderStepContent,
  };
};