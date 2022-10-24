import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isModalAddTransactionOpen } from 'redux/transactions/transactionsSelectors';
import { closeModal } from 'redux/transactions/transactionsSlice';
import { Overlay } from './ModalOverlay.styled';

const ModalOverlay = ({ children }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModalAddTransactionOpen);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleClose = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, dispatch]);

  return <Overlay onClick={handleBackdropClick}>{children}</Overlay>;
};

export default ModalOverlay;
