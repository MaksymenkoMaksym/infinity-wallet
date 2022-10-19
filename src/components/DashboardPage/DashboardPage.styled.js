import styled from 'styled-components';
// import { useMediaPredicate } from 'react-media-hook';

const LiTitleMob = styled.li`
  font-weight: ${props => props.theme.fontWeights.bold}px;
  font-size: ${props => props.theme.fontSizes.m};
`;
const Li = styled.li`
  font-weight: ${props => props.theme.fontWeights.bold}px;
  font-size: ${props => props.theme.fontSizes.s};
`;
const LiTitle = styled.li``;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  border-left: 5px solid ${props => props.theme.colors.pink};
  padding: 12px ${props => props.theme.space[2]}px;
  list-style: none;
  border-bottom: 1px solid #dcdcdf;

  &: last-child {
    border-bottom: none;
  }
`;
const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  width: 280px;
  background: ${props => props.theme.colors.white};

  overflow: hidden;
  border-radius: ${props => props.theme.space[1]}px;
`;
const Sum = styled.li`
  color: ${props => props.theme.colors.pink};
`;
export { LiTitleMob, Li, LiTitle, Ul, Div, Sum };
