import BlurImg from '../../assets/images/rectangle.png';
import styled from 'styled-components';

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
    padding: 0 18px;
    max-width: 1280px;
    background-image: url(${BlurImg});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default Container;
