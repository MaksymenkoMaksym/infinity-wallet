import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  z-index: 100;

  &.enter-done {
    opacity: 1;
    pointer-events: visible;
  }

  &.exit {
    opacity: 0;
  }
`;

export const ModalContent = styled.div`
  width: 500px;
  padding: 20px;
  border-radius: ${props => props.theme.radii.md};
  background-color: ${props => props.theme.colors.white};
  transition: all 0.3s ease-in-out;
  transform: translateY(-200px);

  .enter-done & {
    transform: translateY(0);
  }

  .exit & {
    transform: translateY(-200px);
  }
`;

export const ModalTitle = styled.h3`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xl};
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ModalButton = styled.button`
  width: 140px;
  height: 50px;
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
  border: ${props => props.theme.borders.green};
  border-radius: ${props => props.theme.radii.md};
 
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
        color: ${props => props.theme.colors.white};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: ${props => props.theme.colors.blue};
        border-color: ${props => props.theme.colors.blue};
  }
`;
