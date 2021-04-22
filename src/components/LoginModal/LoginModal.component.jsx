/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../../providers/appProvider';
import {
  Modal,
  LoginForm,
  CloseButton,
  Input,
  LoginButton,
  ErrorMessage,
} from './LoginModal.styles';

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { dispatch } = useContext(AppContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (email.trim() === 'Wizeline' && password.trim() === 'Rocks!') {
      dispatch({
        type: 'LOG_IN',
      });
      onClose();
    } else {
      setError('The email or the password are incorrect');
    }
  };

  return ReactDOM.createPortal(
    <Modal isOpen={isOpen}>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin}>
        <label htmlFor="email">
          Email:
          <br />
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="youremail@email.com"
            onChange={handleEmailChange}
            value={email}
            required
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <br />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            onChange={handlePasswordChange}
            value={password}
            required
          />
        </label>
        <br />
        <LoginButton type="submit">LogIn</LoginButton>
        <br />
      </LoginForm>
      <ErrorMessage>{error}</ErrorMessage>
      <CloseButton type="button" onClick={onClose}>
        &times;
      </CloseButton>
    </Modal>,
    document.body
  );
}
