import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 80px;
  right: ${(props) => (props.isOpen ? '50px' : '-600px')};
  padding: 15px;
  border-radius: 14px;
  z-index: 5000;
  width: 500px;
  height: 200px;
  background-color: white;
  opacity: ${(props) => (props.isOpen ? '100' : '0')};
  transition: 200ms;
`;
