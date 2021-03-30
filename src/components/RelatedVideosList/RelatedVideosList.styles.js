import styled from 'styled-components';

export const RelatedVideos = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  padding: 25px;
  @media (max-width: 768px) {
    display: inline-block;
    width: 100vw;
  }
`;
