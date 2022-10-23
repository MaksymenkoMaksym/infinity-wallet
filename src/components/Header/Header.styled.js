import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 320px;
  padding: 15px 20px;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.white};
  ${props => props.theme.breakpoints.tab} {
    padding: 20px 32px;
    max-width: 768px;
  }

  ${props => props.theme.breakpoints.desc} {
    padding: 20px 16px;
    max-width: 1280px;
  }
`;
const LogoText = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};

  ${props => props.theme.breakpoints.tab} {
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

  ${props => props.theme.breakpoints.tab} {
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

  ${props => props.theme.breakpoints.tab} {
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

  ${props => props.theme.breakpoints.tab} {
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

  ${props => props.theme.breakpoints.tab} {
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
  LogoText,
  UserBtn,
  ExitIcon,
  ExitText,
  HeaderTag,
};
