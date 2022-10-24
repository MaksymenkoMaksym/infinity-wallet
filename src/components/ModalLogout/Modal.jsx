import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
import { logOutUser } from 'redux/auth/authOperation.js';

const Modal = ({ show, onClose, title }) => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutUser());
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
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 300, exit: 300 }}>
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
