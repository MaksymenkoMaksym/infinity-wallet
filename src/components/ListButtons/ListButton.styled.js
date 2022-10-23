import styled from 'styled-components';
import { DivTablet } from '../DashboardPage/DashboardPage.styled';

export const DelBtn = styled.button`
  position: ${props => (props.icon === 'plus' ? 'fixed' : 'initial')};
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  width: 160px;
  height: 34px;
  background-color: ${p => p.theme.colors.pink};
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  z-index: 50;
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    border-radius: 25px;
    visibility: hidden;
  }
`;

export const EdBtn = styled.button`
  position: ${props => (props.icon === 'plus' ? 'fixed' : 'initial')};
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  width: 160px;
  height: 34px;
  opacity: 0.5;
  background-color: ${p => p.theme.colors.green};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  z-index: 50;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    border-radius: 25px;
    visibility: hidden;
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #ffffff;
`;
