import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './LoginModal.styles';

export default function LoginModal({ isOpen, onClose }) {
  return ReactDOM.createPortal(
    <Modal isOpen={isOpen}>
      <span>Login</span>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </Modal>,
    document.body
  );
}
