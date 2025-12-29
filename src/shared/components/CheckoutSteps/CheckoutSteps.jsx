
import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import './style.css'


function OrderStepper({ currentStep, onStepClick }) {
    
    const steps = [
        { id: 1, name: 'Cart' },
        { id: 2, name: 'Checkout' },
        { id: 3, name: 'Place order' },
        { id: 4, name: 'Confirm order' }
    ];

    return (
        <Row className="d-flex justify-content-center mb-4">
            <Col xs="auto">
                <Breadcrumb className="order-breadcrumb">
                    {steps.map((stepItem) => (
                        <Breadcrumb.Item 
                            key={stepItem.id}
                            active={stepItem.id === currentStep} 
                            onClick={() => {
                                if (stepItem.id < currentStep && onStepClick) {
                                    onStepClick(stepItem.id);
                                }
                            }}
                            className={stepItem.id < currentStep ? 'completed-step' : ''}
                        >
                            {stepItem.name}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            </Col>
        </Row>
    );
}

export default OrderStepper;