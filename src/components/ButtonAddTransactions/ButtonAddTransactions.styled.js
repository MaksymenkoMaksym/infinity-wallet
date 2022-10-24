import styled from 'styled-components';

export const AddBtn = styled.button`
  position: ${props => (props.icon === 'plus' ? 'fixed' : 'initial')};
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  background-color: ${p => p.theme.colors.button[p.icon]};
  border-radius: ${p => {
    return p.radius ? `${p.radius}%` : p.theme.radii.round;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  z-index: 50;
  @media screen and (min-width: 768px) {
    right: 40px;
    bottom: 40px;
  }
  transition: transform 250ms linear;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #ffffff;
`;
