import styled from 'styled-components';
export const Wrapper = styled.div`
  padding: 0 ${props => props.theme.space[2]}px;
  margin: 0 auto;
  max-width: 320px;
  height: 100%;

  ${props => props.theme.breakpoints.tab} {
    padding: 0 ${props => props.theme.space[4]}px;
    max-width: 768px;

    background-repeat: no-repeat;
    background-size: cover;
  }

  ${props => props.theme.breakpoints.desc} {
    padding: 0 18px;
    max-width: 1280px;
    display: flex;
  }
`;

export const DiagramBox = styled.div`
  width: 100%;
  ${props => props.theme.breakpoints.tab} {
    display: flex;
  }
  ${props => props.theme.breakpoints.desc} {
    display: flex;
    padding: 40px 0 0 69px;
  }
`;
