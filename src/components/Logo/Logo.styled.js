import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoThumb= styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const LogoIcon = styled.svg`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 16px;
  ${props => props.theme.breakpoints.tab} {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LogoText = styled.span`
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