import styled from 'styled-components';

export const AddBtn = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  background-color: ${p => p.theme.colors.green};
  border-radius: ${p => p.theme.radii.round};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  z-index: 50;
  @media screen and (min-width: 768px) {
    right: 40px;
    bottom: 40px;
  }
`;
export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #ffffff;
`;
