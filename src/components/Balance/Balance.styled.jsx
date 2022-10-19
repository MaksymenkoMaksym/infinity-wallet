import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  //   max-width: 350px;
  height: 80px;
  //   padding: 0px 20px;
  background-color: ${props => props.theme.colors.background.white};
  border-radius: ${props => props.theme.radii.lg};
  margin-bottom: 0px;
  margin-right: auto;
  margin-left: auto;

  ${props => props.theme.breakpoints.tab} {
    width: 336px;
    // padding: 10px 40px;
    margin: 0;
    // margin-right: 20px;
  }
  ${props => props.theme.breakpoints.desc} {
    width: 395px;
    margin-bottom: 30px;
  }
`;

export const Title = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.main};
  color: #a6a6a6;

  margin: 0;
  padding-top: 8px;
  padding-left: 32px;
  // margin-bottom: 12px;

  ${props => props.theme.breakpoints.tab} {
    padding-left: 40px;
  }
`;

export const Sum = styled.p`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.bolt};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: ${props => props.theme.lineHeights.main};
  margin: 0;
  padding-left: 32px;
  align-items: center;
  color: ${props => props.theme.colors.black};

  ${props => props.theme.breakpoints.tab} {
    padding-left: 40px;
  }
`;
