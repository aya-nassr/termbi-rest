import React, { useState } from 'react';
import { Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { PersonFill, ShieldFill, PersonPlus } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import AuthModal from '/src/features/auth/components/auth-modal/AuthModal';
import './style.css';

function AuthButtons() {
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const handleCustomerLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleCustomerSignUp = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  const handleAdminLogin = () => {
    navigate('/login');
  };

  const handleAdminSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <>
      <div className="auth-buttons-container">
        {/* Customer Access */}
        <Dropdown className="me-2">
          <Dropdown.Toggle 
            variant="primary" 
            className="customer-btn"
            id="customer-dropdown"
          >
            <PersonFill className="me-1"  />
            Customer
          </Dropdown.Toggle>
          <Dropdown.Menu align="end" className="customer-dropdown-menu">
            <Dropdown.Header className="text-muted small">
              Customer Access
            </Dropdown.Header>
            <Dropdown.Item onClick={handleCustomerLogin} className="customer-dropdown-item">
              <PersonFill className="me-2" size={14} />
              Login
            </Dropdown.Item>
            <Dropdown.Item onClick={handleCustomerSignUp} className="customer-dropdown-item">
              <PersonPlus className="me-2" size={14} />
              Sign Up
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Admin Access */}
        <Dropdown>
          <Dropdown.Toggle 
            variant="outline-secondary" 
            size="sm" 
            className="admin-btn"
            id="admin-dropdown"
          >
            <ShieldFill className="me-1" size={14} />
            Admin
          </Dropdown.Toggle>
          <Dropdown.Menu align="end" className="admin-dropdown-menu">
            <Dropdown.Header className="text-muted small">
              Administrative Access
            </Dropdown.Header>
            <Dropdown.Item onClick={handleAdminLogin} className="admin-dropdown-item">
              <ShieldFill className="me-2" size={14} />
              Admin Login
            </Dropdown.Item>
            <Dropdown.Item onClick={handleAdminSignUp} className="admin-dropdown-item">
              <PersonPlus className="me-2" size={14} />
              Admin Sign Up
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <AuthModal 
        show={showAuthModal}
        onHide={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
}

export default AuthButtons;