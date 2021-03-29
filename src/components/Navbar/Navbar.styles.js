import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: #8c1b2f;
  display: flex;
  height: 55px;
  padding: 10px 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Left = styled.div`
  text-align: left;
  flex: 1;
  display: flex;

  @media (max-width: 768px) {
    flex: 2;
  }
`;

export const Center = styled.div`
  text-align: center;
  flex: 1;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Right = styled.div`
  text-align: right;
  flex: 1;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 25px;
`;

export const SearchButton = styled.button`
  height: 30px;
  width: 40px;
  border-radius: 0px 25px 25px 0px;
  border: 0px;
  background-color: #dbaaa6;
  color: #fff;
  transition: 200ms;
  &:focus {
    border: 2px solid #ecbfba;
    outline: none;
  }
  &:hover {
    background-color: #ecbfba;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  background-color: #eee;
  border-radius: 25px 0px 0px 25px;
  border: 0px;
  line-height: 1.5em;
  height: 30px;
  width: 70%;
  padding: 4px 10px;
  transition: 200ms;
  &:focus {
    background-color: #fff;
    border: 2px solid #ecbfba;
    outline: none;
    width: 72%;
  }
`;

export const Icon = styled.i`
  margin: 4px 2px;
  border-radius: 15px;
  padding: 4px 10px;
  color: #ffd4d4;
  transition: 200ms;
  font-size: 1.15em;
  &:hover {
    cursor: pointer;
    color: rgb(219, 83, 59);
    font-size: 1.35em;
  }
`;

export const Active = styled(Icon)`
  cursor: pointer;
  color: rgb(252, 212, 212);
  font-size: 1.35em;
`;

export const MobileMenu = styled.div`
  max-width: 480px;
  min-width: 80px;
  margin: auto;
  background-color: #555;
  max-height: 500px;
  color: white;
  border-radius: 10px;
  z-index: 1000;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 60px;
  right: 5px;
  transition: 200ms;
`;

export const MobileMenuButton = styled(Icon)`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    position: fixed;
    right: 5px;
  }
`;
