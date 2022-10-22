import styled from 'styled-components';
import { keyframes } from 'styled-components';
import img from '../../assets/images/background-bottom.png';
import imgPerson from '../../assets/images/login-pic-lg@2x.png';
const example = keyframes`
 0% { opacity: 0.3; }
 30% {  opacity: 0.6 }
 40% {  opacity: 0.8; }
 100% { opacity: 1; }
`;
const DivTable = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1280px) {
    width: 700px;
    height: 900px;
  }
`;
const Text = styled.div`
  padding: 0 15px;
  // background: #4a56e2;

  width: 280px;
  height: 150px;
  display: flex;
  background-image: url(${img});
  background-size: 280px 150px;
  background-repeat: no-repeat;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};

  animation-name: ${example};
  animation-duration: 4s;

  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.l};
    background-size: 380px 180px;
    width: 380px;
    height: 180px;
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1280px) {
    margin-top: 20px;
    margin-right: 0;
    margin-left: 0;
  }
`;
const Picture = styled.div`
  @media (min-width: 1280px) {
    width: 650px;
    height: 700px;
    background-size: 650px 700px;
    background-image: url(${imgPerson});
    background-repeat: no-repeat;
  }
`;
const Name = styled.span`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: #4a56e2;
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;
const NameP = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  &:last-child {
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
  }
`;

const LogoIcon = styled.svg`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 16px;

  @media (min-width: 768px) {
  }
`;
export { DivTable, Name, NameP, LogoIcon, Picture, Text };
