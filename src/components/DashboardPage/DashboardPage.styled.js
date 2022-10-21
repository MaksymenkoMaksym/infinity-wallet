import styled from 'styled-components';
import { keyframes } from 'styled-components';
///////home

const example = keyframes`
 0% { opacity: 0.3; }
 30% {  opacity: 0.6 }
 40% {  opacity: 0.8; }
 100% { opacity: 1; }
`;
const DivTable = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  background: #4a56e2;
  border-radius: 30px;
  width: 300px;
  height: 150px;
  display: flex;

  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};

  animation-name: ${example};
  animation-duration: 4s;
`;

const UlBoard = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  @media (min-width: 768px) {
    margin-bottom: 47px;
  }
`;

//////////////////////////////////for mobile

const PName = styled.span`
  margin: 0;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  @media (min-width: 768px) {
    &:nth-child(1) {
      width: 60px;
    }
    &:nth-child(2) {
      width: 40px;
      margin-left: 45px;
      text-align: center;
    }
    &:nth-child(3) {
      width: 70px;
      margin-left: 40px;
    }
    &:nth-child(4) {
      width: 120px;
      margin-left: 68px;
    }
    &:nth-child(5) {
      width: 40px;
      margin-left: 30px;
      text-align: right;
    }
    &:nth-child(6) {
      width: 120px;
      // margin-left: 60px;
      text-align: right;
    }
  }
`;
const PValue = styled.p`
  margin: 0;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.main};
  color: ${props =>
    props.transaction === 'INCOME'
      ? props.theme.colors.green
      : props.transaction === 'EXPENSE'
      ? props.theme.colors.pink
      : props.theme.colors.black};
`;

const DivItem = styled.div`
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
const Li = styled.li`
  overflow: hidden;
  border-radius: ${props => props.theme.radii.sm};
  padding: 0;
  margin-bottom: 8px;
  min-width: 280px;
  background: ${props => props.theme.colors.white};
    }
`;

////////////////////////////////////for laptop

const Block = styled.div`
  // margin-top: 60px;
  // overflow: scroll;
  overflow-y: scroll;
  height: 650px;
  @media (min-width: 1280px) {
    height: 500px;
  }
`;

const LiTablet = styled.li`
  list-style: none;
  position: reletive;
`;

const UlTitle = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-between;

  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.lg};
  padding: 15px 20px;
  align-items: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};

  position: sticky;
`;
const DivTablet = styled.div`

 display: flex;
  justify-content: space-between;
    align-items: center;
  
   padding: 15px 20px;
  &:not(:last-child){
      border-bottom: 1px solid #dcdcdf;
      box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

`;

const PList = styled.p`
  margin: 0;
  padding: 0;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.main};
  &:nth-child(1) {
    width: 60px;
  }
  &:nth-child(2) {
    width: 40px;
    margin-left: 45px;
    text-align: center;
  }
  &:nth-child(3) {
    width: 70px;
    margin-left: 40px;
  }
  &:nth-child(4) {
    width: 120px;
    margin-left: 68px;
  }
  &:nth-child(5) {
    width: 40px;
    margin-left: 30px;
    text-align: right;
  }
  &:nth-child(6) {
    width: 120px;
    // margin-left: 60px;
    text-align: right;
  }
`;

const Sum = styled.span`
  margin: 0;
  color: ${props =>
    props.transaction === 'INCOME'
      ? props.theme.colors.green
      : props.theme.colors.pink};
`;

export {
  LiTablet,
  PName,
  Li,
  DivTablet,
  PValue,
  DivItem,
  Sum,
  PList,
  UlTitle,
  UlBoard,
  Block,
  DivTable,
};
