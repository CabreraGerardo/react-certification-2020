import styled from 'styled-components';

export const Image = styled.div`
  height: 150px;
  width: 310px;
  margin-left: -5px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  transition: 100ms;
`;

export const Video = styled.div`
  max-width: 300px;
  height: 340px;
  border-radius: 8px;
  display: inline-block;
  margin: 15px 20px;
  vertical-align: top;
  text-align: left;
  transition: 200ms;
  position: relative;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.itemBackground};

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    margin-top: 10px;
    margin-bottom: 20px;
    box-shadow: 6px 6px ${(props) => props.theme.shadowColor};
    cursor: pointer;
  }

  &:hover ${Image} {
    width: 336px;
    margin-left: -18px;
    box-shadow: 8px 4px ${(props) => props.theme.shadowColor};
  }
`;

export const Text = styled.div`
  margin-bottom: 10px;
  margin-left: 12px;
  margin-right: 12px;
`;

export const Description = styled.small`
  font-size: 10pt;
  line-height: 1.5em;
  margin-bottom: 16px;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Title = styled.strong`
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 12px 0px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Channel = styled.p`
  font-size: 8pt;
  position: absolute;
  bottom: 0;
  left: 20px;
  font-weight: 300;
`;

export const PublishedDate = styled.p`
  font-size: 8pt;
  position: absolute;
  bottom: 0;
  right: 20px;
  font-weight: 300;
`;
