import styled from 'styled-components';

export const Image = styled.div`
  height: 160px;
  width: 160px;
  margin-top: -5px;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  transition: 100ms;
  z-index: 100;
`;

export const Channel = styled.div`
  max-width: 400px;
  height: 150px;
  border-radius: 8px;
  display: inline-block;
  margin: 25px 25px;
  vertical-align: top;
  text-align: left;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  &:hover ${Image} {
    width: 180px;
    height: 180px;
    margin-left: -20px;
    margin-top: -20px;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Text = styled.div`
  flex: 2;
`;

export const Description = styled.small`
  font-size: 10pt;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-left: 20px;
  margin-right: 35px;
`;

export const Title = styled.strong`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const TitleBar = styled.div`
  padding: 8px 5px;
  padding-left: 75px;
  margin-right: 10px;
  margin-left: -60px;
  margin-bottom: 10px;
  margin-top: 15px;
  border-radius: 0px 25px 25px 0px;
  background-color: #fefefe;
`;
