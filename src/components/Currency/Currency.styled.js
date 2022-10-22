import styled from 'styled-components';
import waveMobile from '../../assets/images/wave-mobile.svg';
import waveDesktop from '../../assets/images/wave-desktop.svg';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 174px;

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
`;

export const Thead = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-around;
  padding: 0;

  align-items: center;
  border-bottom: 0px;
  background: #6e78e8;
  color: ${props => props.theme.colors.white};
  height: 50px;

  ${props => props.theme.breakpoints.desc} {
    justify-content: space-evenly;
    height: 60px;
  }
`;

export const ThItem = styled.li`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const TdBox = styled.div`
  padding: 14px 20px 4px 20px;
  ${props => props.theme.breakpoints.tab} {
    padding: 16px 28px;
  }
  ${props => props.theme.breakpoints.desc} {
    padding: 20px 59px;
  }
`;

export const TdList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 0;

  ${props => props.theme.breakpoints.tab} {
    justify-content: space-between;
  }
`;

export const TdItem = styled.li`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.white};
  text-align: center;
  padding-bottom: 14px;

  ${props => props.theme.breakpoints.desc} {
    padding-bottom: 24px;
  }
`;
