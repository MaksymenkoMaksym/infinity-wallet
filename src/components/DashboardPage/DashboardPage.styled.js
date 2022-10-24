import styled from 'styled-components';
import { keyframes } from 'styled-components';

const example = keyframes`
 0% { opacity: 0; }
 30% {  opacity: 0.1 }
 40% {  opacity: 0.2; }
 60% {  opacity: 0.4; }
 100% { opacity: 0.5; }
`;

const UlBoard = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
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
      width: 55px;
      text-align: left;
      margin-left: 20px;
    }
    &:nth-child(2) {
      width: 130px;

      text-align: center;
    }
    &:nth-child(3) {
      width: 140px;
    }
    &:nth-child(4) {
      width: 140px;
    }
    &:nth-child(5) {
      width: 78px;
      text-align: right;
    }
    &:nth-child(6) {
      width: 110px;
      text-align: right;
      margin-right: 20px;
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
  width: 715px;
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
  color: ${props => props.theme.colors.black};
  padding: 15px 0;
  &:not(:last-child) {
    /* border-bottom: 1px solid #dcdcdf; */
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
  &:hover {
    box-shadow: #b6bbf3 0px 15px 15px -15px inset,
      #b6bbf3 0px -15px 15px -15px inset;
    /* border: 1px solid #dcdcdf; */
    /* box-shadow: 0px 1px 0px red; */
    backdrop-filter: blur(10px);
    /* box-shadow: #b6bbf3 0px 0px 15px 0px inset; */
    /* border-radius: ${props => props.theme.radii.lg}; */

    /* box-shadow: 0px 0px 5px 5px #b6bbf3; */
  }
  &:hover button {
    background-color: blue;
    visibility: visible;
    animation-name: ${example};
    animation-duration: 1s;
  }
`;

const PList = styled.p`
  margin: 0;
  padding: 0;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.main};

  &:nth-child(2) {
    width: 55px;
    text-align: left;
    padding-left: 5px;
  }
  &:nth-child(3) {
    width: 130px;

    text-align: center;
  }
  &:nth-child(4) {
    width: 140px;
  }
  &:nth-child(5) {
    width: 140px;
  }
  &:nth-child(6) {
    width: 78px;
    text-align: right;
  }
  &:nth-child(7) {
    width: 110px;
    padding-right: 5px;
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
