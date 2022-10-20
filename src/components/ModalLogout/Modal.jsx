import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import {
  ModalStyled,
  ModalContent,
  ModalTitle,
  ModalFooter,
  ModalButton,
} from './Modal.styled.js';

const Modal = ({ show, onClose, title }) => {
  const onLogOut = () => {
    // dispatch(logoutAction());
    // token.unset();
    // navigate('/', { replace: true });
    console.log(111);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 400, exit: 800 }}>
      <ModalStyled onClick={onClose}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <ModalTitle>{title}</ModalTitle>
          <ModalFooter>
            <ModalButton onClick={onLogOut}>Yes</ModalButton>
            <ModalButton onClick={onClose}>No</ModalButton>
          </ModalFooter>
        </ModalContent>
      </ModalStyled>
    </CSSTransition>,
    document.getElementById('modal')
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Modal;
