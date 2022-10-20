import styled from 'styled-components';
// import { useMediaPredicate } from 'react-media-hook';
const UlBoard = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
`;
const LiTitleMob = styled.li`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  @media (min-width: 768px) {
    display: none;
  }
`;
const Li = styled.li`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.main};
`;
const UlTitle = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    list-style: none;
    flex-direction: row;
    justify-content: space-between;

    width: 704px;
    height: 58px;

    background: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.radii.lg};
    padding: 0px;
    align-items: center;
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: ${props => props.theme.lineHeights.main};
  }
`;
const LiTitle = styled.li`
  display: flex;
  width: 100px;
  justify-content: center;
`;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;

  border-left: 5px solid
    ${props =>
      props.transaction === 'INCOME'
        ? props.theme.colors.green
        : props.theme.colors.pink};

  padding: 12px ${props => props.theme.space[2]}px 8px;
  list-style: none;
  border-bottom: 1px solid #dcdcdf;
  align-items: baseline;

  &: last-child {
    border-bottom: ${props => props.theme.borders.none};
  }

  @media (min-width: 768px) {
    border-left: ${props => props.theme.borders.none};
    border-bottom: ${props => props.theme.borders.none};
    padding: 0px;
    width: 100px;
    align-items: center;
    justify-content: center;
  }
`;
const Div = styled.div`
  font-family: ${props => props.theme.fonts.main};
  margin-left: auto;
  margin-right: auto;
  //   padding-left: 20px;
  //   padding-right: 20px;
  min-width: 280px;
  max-width: 360px;
  @media (min-width: 768px) {
    min-width: 704px;
    max-width: 715px;
  }
`;
const Sum = styled.li`
  color: ${props =>
    props.transaction === 'INCOME'
      ? props.theme.colors.green
      : props.theme.colors.pink};
`;

const UlItems = styled.ul`
overflow: hidden;
border-radius: ${props => props.theme.radii.sm};
 padding: 0;
   margin-bottom: 8px;
  min-width: 280px;
   background: transparent;
  @media (min-width: 768px) {
   border-radius: ${props => props.theme.radii.none};
    display: flex;
    list-style: none;
    flex-direction: row;
    justify-content: space-between;
    width: 704px;
    margin-bottom: 0;
    // height: 58px;
    padding: 15px 0px;
&:not(:last-child){
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
`;

export { LiTitleMob, Li, LiTitle, Div, Ul, Sum, UlTitle, UlItems, UlBoard };
