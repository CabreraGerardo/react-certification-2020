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
`;
