import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderTag = styled.header`
  outline: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  padding: 15px 0;
  margin-left: auto;
  margin-right: auto;
`;
const LogoIcon = styled.svg`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 16px;
`;

const ExitIcon = styled.svg`
  display: inline-block;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const LogoText = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const UserSpan = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  margin-right: ${props => props.theme.space[1]}px;
  max-width: 80px;
  max-height: 27px;
  overflow: hidden;
`;

const UserDiv = styled.div`
  display: flex;
  align-items: baseline;
`;

export {
  UserDiv,
  UserSpan,
  StyledLink,
  LogoIcon,
  LogoText,
  ExitIcon,
  HeaderTag,
};
