import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 0;

  @media (min-width: 768px) {
    padding: 20px 0;
  }
`;

const LogoIcon = styled.svg`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 16px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;

const LogoText = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const UserDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;

  @media (min-width: 768px) {
    height: 30px;
  }
`;

const UserSpan = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  margin-right: 8px;
  max-width: 80px;
  max-height: 24px;

  @media (min-width: 768px) {
    margin-right: 12px;
  }
`;

const UserBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: inherit;
  background-color: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    padding-left: 12px;
    border-left: 1px solid ${props => props.theme.colors.gray};
  }
`;

const ExitIcon = styled.svg`
  display: inline-block;
  width: 18px;
  height: 18px;
`;

const ExitText = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
    color: ${props => props.theme.colors.gray};
    font-family: ${props => props.theme.fonts.main};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: ${props => props.theme.lineHeights.main};
  }
`;

export {
  UserDiv,
  UserSpan,
  StyledLink,
  LogoIcon,
  LogoText,
  UserBtn,
  ExitIcon,
  ExitText,
  HeaderTag,
};
