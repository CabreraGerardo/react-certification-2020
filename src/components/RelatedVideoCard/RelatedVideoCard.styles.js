import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
`;

export const Thumbnail = styled.div`
  height: 120px;
  max-width: 40%;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  flex: 1;
  transition: 200ms;
`;

export const Card = styled.div`
  margin-bottom: 10px;
  max-width: 100%;
  border-radius: 8px;
  transition: 200ms;
  @media (max-width: 768px) {
    display: inline-block;
    max-width: 50%;
  }
  @media (max-width: 500px) {
    display: inline-block;
    max-width: 100%;
  }
  &:hover {
    background-color: #fefefe;
    cursor: pointer;
  }
  &:hover ${Thumbnail} {
    height: 125px;
  }
`;

export const Text = styled.div`
  padding: 12px;
  flex-direction: column;
  flex: 1;
  max-width: 60%;
`;

export const Title = styled.strong`
  display: block;
  font-size: 10pt;
  line-height: 1.2;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Description = styled.small`
  display: block;
  font-size: 10pt;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
