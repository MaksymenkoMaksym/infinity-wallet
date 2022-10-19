import styled from 'styled-components';
import waveMobile from '../../assets/images/wave-mobile.svg';
import waveTablet from '../../assets/images/wave-tablet.svg';
// import waveDesktop from '../../images/svg/wave-desktop.svg';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-width: 280px;
  max-width: 348px;
  max-height: 347px;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.background.currency};

  @media (min-width: 1280px) {
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
  @media (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${waveTablet});
  } ;
`;

export const Thead = styled.thead`
  font-family: Circe; sans-serif;
    font-size: 18px;
    font-weight: 700;
    padding-top: 11px;
    padding-bottom: 12px;
    color: #ffffff;
    background-color: #6e78e8;
    align-items: center;
    border-bottom: 0px;

    @media (min-width:768px) {
      padding-top: 17px;
      padding-bottom: 16px;
    };
`;

export const TdName = styled.td`
  font-family: Circe;
    font-size: 16px;
    font-weight: 400;
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${props => props.theme.colors.white};;
    border-bottom: 0px;
    border: transparent;
    };
`;

export const TdValue = styled.td`
  font-family: Circe;
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme.colors.white};;
    border-bottom: 0px;
    };
`;
