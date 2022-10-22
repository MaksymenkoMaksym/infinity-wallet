import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1200;
  margin-top: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    padding-top: 60px;
  }
`;
