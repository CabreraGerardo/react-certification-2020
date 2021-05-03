import styled from 'styled-components';

export const VideoLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  padding: 25px;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Video = styled.div`
  height: 500px;
  @media (max-width: 1030px) {
    height: 400px;
  }
  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const Icon = styled.i`
  border-radius: 15px;
  color: #ffd4d4;
  transition: 200ms;
  font-size: 1.15em;
`;

export const FavoritesButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  transition: 200ms;
  margin-top: -15px;
  margin-left: 15px;
  padding: 4px 8px;
  width: max-content;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
  &:hover ${Icon} {
    color: rgb(219, 83, 59);
  }
`;
