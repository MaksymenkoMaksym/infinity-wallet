const { default: styled } = require('styled-components');

const Container = styled.div`
  outline: 1px solid red;
  padding: 0 ${props => props.theme.space[2]}px;
  margin: 0 auto;
  max-width: 320px;
  background-color: ${props => props.theme.colors.background.blurTablet};

  ${props => props.theme.breakpoints.tab} {
    padding: 0 ${props => props.theme.space[4]}px;
    max-width: 768px;
  }
  ${props => props.theme.breakpoints.desc} {
    padding: 0 85px;
    max-width: 1280px;
  }
`;

export default Container;
