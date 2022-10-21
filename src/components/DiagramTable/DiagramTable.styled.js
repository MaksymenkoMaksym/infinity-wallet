import styled from 'styled-components';

export const Wrapper = styled.div`
  ${props => props.theme.breakpoints.tab} {
    /* overflow: hidden; */
    /* background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.4)
      ),
      url(${'VioletSpot'}), url(${'PinkSpot'});
    background-repeat: no-repeat, no-repeat;
    background-position: -133.33px 655px, 380.41px -183px; */
    /* background-color: rgba(255, 255, 255, 0.4); */
  }

  ${props => props.theme.breakpoints.desc} {
    display: flex;
    /* background-image: url(${'VioletSpot'}), url(${'PinkSpot'});
    background-repeat: no-repeat, no-repeat;
    height: 100vh;
    background-position: -150.33px 305px, 756.41px -143px; */
    // backdrop-filter: blur(25px);
  }
`;

export const DiagramBox = styled.div`
  ${props => props.theme.breakpoints.tab} {
    display: flex;
  }
  ${props => props.theme.breakpoints.desc} {
    display: flex;
    padding: 40px 0 0 69px;
  }
`;
