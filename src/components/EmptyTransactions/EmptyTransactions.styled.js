import styled from 'styled-components';
import { keyframes } from 'styled-components';

const example = keyframes`
 0% { opacity: 0.3; }
 30% {  opacity: 0.6 }
 40% {  opacity: 0.8; }
 100% { opacity: 1; }
`;
export const DivTable = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  background: #4a56e2;
  border-radius: 30px;
  width: 300px;
  height: 150px;
  display: flex;

  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};

  animation-name: ${example};
  animation-duration: 4s;
`;
