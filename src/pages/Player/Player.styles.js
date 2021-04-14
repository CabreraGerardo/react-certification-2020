import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 80px;
  display: flex;
  width: 100vw;
  background-color: ${(props) => props.theme.bodyBackground};
  @media (max-width: 768px) {
    display: inline-block;
  }
`;
