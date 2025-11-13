import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// استيراد أيقونات Font Awesome من مكتبة react-icons/fa
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

// افتراض أن مسار الشعار موجود في هذا المكان
import Logo from '/src/assets/img/logo.png';


function FooterSection() {
    return (
        // استخدام عنصر <footer> مع كلاسات Bootstrap مباشرة
        <footer className="bg-dark py-5 text-white">
            <Container>
                {/* صف الأعمدة الرئيسي */}
                <Row 
                    // تضبط عدد الأعمدة حسب الشاشة: 1 (xs), 2 (md), 5 (lg)
                    // ملاحظة: لا يوجد خاصية row-cols مباشرة في React-Bootstrap، لكن يمكن تحقيقها عبر cols
                    // سأستخدم التوزيع المخصص بدلاً من row-cols-lg-5
                    className="g-4 text-center text-lg-center"
                >
                    {/* 1. عمود الشعار والنص والروابط الاجتماعية (سيأخذ مساحة أكبر) */}
                    <Col lg={4} md={6} xs={12}>
                        {/* استخدام مكون Image */}
                        <Image 
                            src={Logo} 
                            alt="logo" 
                            className="mb-4" 
                            style={{ maxWidth: '150px' }} 
                        />
                        
                    </Col>

                    {/* 2. عمود الخدمة */}
                    <Col lg={2} md={6} xs={12}>
                        <h6 className="fw-bold mb-3">Service</h6>
                        <a href="#" className="d-block text-white text-decoration-none py-1">Domain</a>
                        <a href="#" className="d-block text-white text-decoration-none py-1">Shared Hosting</a>
                        <a href="#" className="d-block text-white text-decoration-none py-1">Cloud Hosting</a>
                        <a href="#" className="d-block text-white text-decoration-none py-1">Private Hosting</a>
                    </Col>

                    {/* 3. عمود الاستضافة */}
                    <Col lg={2} md={4} xs={12}>
                        <h6 className="fw-bold mb-3">Hosting</h6>
                        <a href="#" className="d-block text-white text-decoration-none py-1">Cheap Hosting</a>
                        <a href="#" className="d-block text-white text-decoration-none py-1">WordPress Hosting</a>
                        <a href="#" className="d-block text-white text-decoration-none py-1">Email Hosting</a>
                        <a href="#" className="d-block text-white text-decoration-none py-1">Unlimited Hosting</a>
                    </Col>

                    
                    {/* 5. عمود المساعدة */}
                    <Col lg={2} md={4} xs={12}>
                        <h6 className="fw-bold mb-3">Help</h6>
                        <a href="#" className="d-block text-white text-decoration-none py-1">FAQ</a>
                        <a href="#" className="d-block text-white text-decoration-none py-1">Help Support</a>
                    </Col>
                
                {/* ملاحظة: المجموع الكلي لأعمدة lg هو 4+2+2+2+2 = 12، لتحقيق تقسيم row-cols-lg-5 تقريباً */}
                </Row>
                <Row>
                     {/* فقرة حقوق النشر */}
                <p className="text-center text-lg-start my-3 pt-3 border-top border-white border-opacity-25">
                    Copyright 2025 All rights reserved
               
                
                            <a href="#" className="me-3 text-white">
                                <FaFacebookF size="1.2em" /> {/* أيقونة فيسبوك */}
                            </a>
                            <a href="#" className="me-3 text-white">
                                <FaInstagram size="1.2em" /> {/* أيقونة إنستغرام */}
                            </a>
                            <a href="#" className="text-white">
                                <FaTwitter size="1.2em" /> {/* أيقونة تويتر (X) */}
                            </a>
                             </p>

                </Row>
               
            </Container>
        </footer>
    );
}

export default FooterSection;