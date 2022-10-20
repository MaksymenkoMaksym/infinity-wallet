import styled from 'styled-components';
import waveMobile from '../../assets/images/wave-mobile.svg';
import waveDesktop from '../../assets/images/wave-desktop.svg';
import rectangle from '../../assets/images/Rectangle.svg';
import rectangleTab from '../../assets/images/Rectangle-tab.svg';
import rectangleDesc from '../../assets/images/Rectangle-desc.svg';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  min-width: 280px;
  min-height: 184px;

  border-radius: ${props => props.theme.radii.lg};
  background-color: ${props => props.theme.colors.background.currency};
  background-image: url(${waveMobile});
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 30px;
  ${props => props.theme.breakpoints.tab} {
    margin-right: 0;
    min-width: 336px;
    height: 182px;
  }

  ${props => props.theme.breakpoints.desc} {
    margin-left: 0;
    width: 395px;
    height: 347px;
    background-image: url(${waveDesktop});
  }

  & tbody {
  }
`;

export const Thead = styled.thead`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  padding-top: 11px;
  padding-bottom: 12px;

  align-items: center;
  border-bottom: 0px;
  // background-image: url(${rectangle});
  background: #6e78e8;
  // opacity: 0.2;
  color: ${props => props.theme.colors.white};
  height: 50px;

  ${props => props.theme.breakpoints.tab} {
    padding-top: 17px;
    padding-bottom: 16px;
    // background-image: url(${rectangleTab});
  }

  ${props => props.theme.breakpoints.desc} {
    height: 60px;
    // background-image: url(${rectangleDesc});
  }
  & th {
    border: none;
  }
`;

export const TdName = styled.td`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.white};
  text-align: center;
`;

export const TdValue = styled.td`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.white};

  text-align: center;
  ${props => props.theme.breakpoints.desc} {
    display: inline-block
    height: 10px;
    padding: 10px 10px
  } ;
`;

export const Container = styled.div`
  // margin-left: auto;
  // margin-right: auto;
  // min-width: 280px;
  // min-height: 184px;
  // border-radius: ${props => props.theme.radii.lg};
  // background-color: ${props => props.theme.colors.background.currency};
  // background-image: url(${waveMobile});
  // background-size: 100%;
  // background-position: bottom;
  // background-repeat: no-repeat;

  // ${props => props.theme.breakpoints.tab} {
  //   margin-right: 0;
  //   min-width: 336px;
  //   height: 182px;
  // }

  // ${props => props.theme.breakpoints.desc} {
  //   margin-left: 0;
  //   width: 395px;
  //   background-image: url(${waveDesktop});
  // }
`;

// export const Tbody = styled.tbody`
//   // @media (max-width: 767px) {
//   //   background-image: url(${waveMobile});
//   // }
//   ${props => props.theme.breakpoints.tab} {
//     // background-image: url(${waveTablet});
//   } ;
// `;
