import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../../../auth/context/AuthContext";
import { profileAPI } from "../../services/api";
import "./style.css";

export function ManageProfileForm() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ').slice(1).join(' ') || '',
    username: user?.username || '',
    phone: user?.phone || '',
    email: user?.email || ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await profileAPI.updateProfile(formData);
      console.log('Profile updated successfully:', response);
      // TODO: Show success message
    } catch (error) {
      console.error('Error updating profile:', error);
      // TODO: Show error message
    }
  };

  return (
    <div className="manage-profile-card">
      <h4 className="section-title mb-4">Manage Profile</h4>
      <div className="d-flex align-items-center mb-5 profile-info-header">
        <img 
          src={user?.image || '/src/assets/img/default-avatar.jpg'} 
          alt={user?.name || 'User'} 
          className="header-avatar" 
        />
        <div className="ms-3">
          <h6 className="mb-0 fw-bold">{user?.name || 'User'}</h6>
          <button className="change-image-btn">Change image</button>
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label className="custom-label">First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="custom-input"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label className="custom-label">Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="custom-input"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="username">
              <Form.Label className="custom-label">Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="custom-input"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label className="custom-label">Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="custom-input"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label className="custom-label">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="custom-input"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-end">
          <Button type="submit" variant="danger" className="save-btn px-4">
            Save Change
          </Button>
        </div>
      </Form>
    </div>
  );
}
