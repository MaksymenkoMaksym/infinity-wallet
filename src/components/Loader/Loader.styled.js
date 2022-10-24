import styled from 'styled-components';

export const LoaderStyled = styled.div`
  position: ${p => (p.box ? 'relative' : 'fixed')};
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;
