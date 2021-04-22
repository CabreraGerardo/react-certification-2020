import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 80px;
  right: ${(props) => (props.isOpen ? '50px' : '-600px')};
  padding: 15px 25px;
  padding-top: 0px;
  border-radius: 14px;
  z-index: 5000;
  width: 300px;
  height: max-content;
  background-color: ${(props) => props.theme.itemBackground};
  color: ${(props) => props.theme.fontColor};
  opacity: ${(props) => (props.isOpen ? '100' : '0')};
  transition: 200ms;
`;

export const LoginForm = styled.form`
  width: max-content;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  height: 25px;
  padding: 5px;
  cursor: pointer;
  border-radius: 50px;
  background-color: ${(props) => props.theme.shadowColor};
  color: ${(props) => props.theme.fontColor};
  border: 0px;
`;

export const Input = styled.input`
  border: 0px;
  border-radius: 100px;
  padding: 6px 12px;
  margin-bottom: 12px;
  background-color: ${(props) => props.theme.inputColor};
`;

export const LoginButton = styled.button`
  width: max-content;
  align-self: center;
  height: 25px;
  padding: 0px 25px;
  cursor: pointer;
  border-radius: 50px;
  background-color: ${(props) => props.theme.hoverColor};
  color: ${(props) => props.theme.fontColor};
  border: 0px;
`;

export const ErrorMessage = styled.small`
  font-size: 10pt;
  max-width: 200px;
  text-align: center;
`;
