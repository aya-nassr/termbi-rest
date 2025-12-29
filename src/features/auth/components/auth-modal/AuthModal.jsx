import React from 'react';
import { Modal } from 'react-bootstrap';
import LoginModalForm from './components/LoginModalForm';
import SignUpModalForm from './components/SignUpModalForm';
import { useAuthModal } from './hooks/useAuthModal';
import './styles/AuthModal.css';

function AuthModal({ show, onHide, initialMode = 'login' }) {
  const { mode, switchToSignUp, switchToLogin } = useAuthModal(initialMode);

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      centered 
      size="md"
      backdrop="static"
      className="auth-modal"
      style={{ borderRadius: '12px' }}
    >
      <Modal.Header closeButton className="border-0 pb-2">
        <Modal.Title className="w-100 text-center" >
          {mode === 'login' ? 'Log in' : 'Create an Account'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4 pb-4">
        {mode === 'login' ? (
          <LoginModalForm 
            onSwitchToSignUp={switchToSignUp}
            onClose={onHide}
          />
        ) : (
          <SignUpModalForm 
            onSwitchToLogin={switchToLogin}
            onClose={onHide}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default AuthModal;