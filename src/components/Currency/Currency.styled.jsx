import styled from 'styled-components';
import waveMobile from '../../assets/images/wave-mobile.svg';
import waveTablet from '../../assets/images/wave-tablet.svg';
// import waveDesktop from '../../images/svg/wave-desktop.svg';

export const Container = styled.div`
  margin-left: auto;
  // margin-right: auto;
  min-width: 280px;
  max-width: 348px;
  max-height: 347px;
  border-radius: ${props => props.theme.radii.lg};
  background-color: ${props => props.theme.colors.background.currency};

  ${props => props.theme.breakpoints.desc} {
    width: 348px;
    height: 347px;
  }
`;

export const Table = styled.table`
  min-width: auto;
  min-height: auto;
  margin-left: auto;
  margin-right: auto;

  border: transparent;

  @media (max-width: 767px) {
    width: 280px;
    height: 174px;
    min-width: auto;
    min-height: auto;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  } ;
`;

export const Tbody = styled.tbody`
  background-size: cover;
  background-position: bottom;

  @media (max-width: 767px) {
    background-image: url(${waveMobile});
  }
  ${props => props.theme.breakpoints.tab} {
    background-image: url(${waveTablet});
  } ;
`;

export const Thead = styled.thead`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  padding-top: 11px;
  padding-bottom: 12px;
  color: ${props => props.theme.colors.white};
  background-color: #6e78e8;
  align-items: center;
  border-bottom: 0px;

  ${props => props.theme.breakpoints.tab} {
    padding-top: 17px;
    padding-bottom: 16px;
  } ;
`;

export const TdName = styled.td`
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.fontSizes.s};
    font-weight: ${props => props.theme.fontWeights.normal};
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${props => props.theme.colors.white};;
    border-bottom: 0px;
    border: transparent;
    };
`;

export const TdValue = styled.td`
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.fontSizes.s};
    font-weight: ${props => props.theme.fontWeights.normal};
    color: ${props => props.theme.colors.white};;
    border-bottom: 0px;
    };
`;
