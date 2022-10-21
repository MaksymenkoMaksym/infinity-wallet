// import VioletSpotTab from '../../assets/images/bg-bottom-md.png';
import VioletSpotDesc from '../../assets/images/bg-bottom-lg.png';
// import PinkSpotTab from '../../assets/images/bg-top-md.png';
import PinkSpotDesc from '../../assets/images/bg-top-lg.png';
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
    padding: 0 18px;
    max-width: 1280px;
    /*background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.1)
      ),
      url(${PinkSpotDesc}), url(${VioletSpotDesc});
    background-repeat: no-repeat, no-repeat;
    background-position: right top, right top, left bottom;
    backdrop-filter: blur(25px);*/
  }
`;

export default Container;
