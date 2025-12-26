// /features/Order/OrderStepper.js (اسم الملف الجديد)

import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import './style.css'

/**
 * مكون عرض خطوات الطلب (Breadcrumb)
 * @param {object} props
 * @param {number} props.currentStep - رقم الخطوة النشطة حاليًا (1, 2, 3, 4)
 * @param {function} props.onStepClick - (اختياري) دالة للعودة إلى الخطوات السابقة
 */
function OrderStepper({ currentStep, onStepClick }) {
    
    // تعريف الخطوات بوضوح
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
                            // *فقط* نجعل الخطوات السابقة قابلة للنقر (للمراجعة)
                            onClick={() => {
                                // نمنع النقر على الخطوة الحالية أو الخطوات التالية
                                if (stepItem.id < currentStep && onStepClick) {
                                    onStepClick(stepItem.id);
                                }
                            }}
                            // نستخدم كلاس لتنسيق الخطوات المكتملة
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