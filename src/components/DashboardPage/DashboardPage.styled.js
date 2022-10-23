import styled from 'styled-components';
// import { DeleteBtn } from '../ListButtons/ListButton.styled';
///////home

const UlBoard = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  //   overflow-y: scroll;
  //   max-height: 350px;
  //   @media (min-width: 768px) {
  //     // overflow-y: scroll;
  //   }
  //
`;

//////////////////////////////////for mobile

const MobDiv = styled.div`
  overflow-y: scroll;
  max-height: 350px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const PName = styled.span`
  margin: 0;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  @media (min-width: 768px) {
    &:nth-child(1) {
      width: 60px;
      margin-left: 20px;
    }
    &:nth-child(2) {
      width: 40px;
      margin-left: 45px;
      text-align: center;
    }
    &:nth-child(3) {
      width: 70px;
      margin-left: 25px;
    }
    &:nth-child(4) {
      width: 180px;
      margin-left: 25px;
    }
    &:nth-child(5) {
      width: 40px;
      margin-left: 30px;
      text-align: right;
    }
    &:nth-child(6) {
      width: 120px;
      margin-right: 20px;
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

  &:last-child {
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
`;

const Buttons = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

////////////////////////////////////for laptop

const Block = styled.div`
  overflow-y: scroll;
  max-height: 650px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: transponent;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffc1d5;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #b6bbf3;
  }
  @media (min-width: 1280px) {
    max-height: 500px;
  }
`;

const LiTablet = styled.li`
  list-style: none;
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
  cursor: pointer;
  padding: 15px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
  &:hover button {
    background-color: blue;
    visibility: visible;
  }
`;

const PList = styled.p`
  margin: 0;
  padding: 0;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.main};
  &:nth-child(2) {
    width: 60px;
  }
  &:nth-child(3) {
    width: 40px;
    margin-left: 45px;
    text-align: center;
  }
  &:nth-child(4) {
    width: 70px;
    margin-left: 40px;
  }
  &:nth-child(5) {
    width: 160px;
    margin-left: 40px;
  }
  &:nth-child(6) {
    // width: 40px;
    margin-left: 30px;
    text-align: right;
  }
  &:nth-child(7) {
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
  Buttons,
  MobDiv,
};
