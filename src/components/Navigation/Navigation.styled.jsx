import styled from 'styled-components';

// export const NavContainer = styled.nav`
//   // width: 320px;
//   // margin: 0;
//   // margin-left: auto;
//   // margin-right: auto;
//   // padding: 0;
//   // padding-bottom: 15px;
// `;
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

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export const TextItem = styled.span`
  text-decoration: none;
  color: inherit;
  ${props => props.theme.breakpoints.tab} {
    margin-left: 23px;

    font-family: ${props => props.theme.fonts.secondary};
    font-weight: ${props => props.theme.fontWeights.normal};
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
`;
