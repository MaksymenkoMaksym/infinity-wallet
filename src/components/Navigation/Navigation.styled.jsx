import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  // width: 320px;
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 36px;
  margin: 0;
  padding: 0;
  padding-top: 15px;
  padding-bottom: 15px;

  ${props => props.theme.breakpoints.tab} {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: flex-start;

    flex-wrap: wrap;
    gap: 12px;
    flex-direction: column;
    padding-top: 0;
    // padding-left: 35px;
    padding-bottom: 16px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  ${props => props.theme.breakpoints.tab} {
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  fill: #6e78e8;
  transition: transform 250ms linear;
  &:hover,
  &:focus {
    transform: scale(1.1, 1.1);
  }
  &.active {
    fill: #4a56e2;
    font-family: ${props => props.theme.fonts.secondary};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: ${props => props.theme.lineHeights.main};
  }
`;

export const TextItem = styled.span`
  text-decoration: none;
  color: inherit;
  ${props => props.theme.breakpoints.tab} {
    margin-left: 23px;

    font-family: ${props => props.theme.fonts.secondary};
    // font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: ${props => props.theme.lineHeights.main};
  }
`;

export const Icon = styled.svg`
  width: 38px;
  height: 38px;

  ${props => props.theme.breakpoints.tab} {
    width: 18px;
    height: 18px;
  }

  &.active {
    box-shadow: 0px 0px 49px 0px rgba(74, 86, 226, 1);
  }
`;
