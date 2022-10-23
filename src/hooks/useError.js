import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  authMessageCreator,
  transactionMessageCreator,
  notify,
} from 'utility/toastFunction';

export const useError = () => {
  const authError = useSelector(state => state.auth.error);
  const transactionError = useSelector(state => state.transaction.error);

    useEffect(() => {
        if (!authError && !transactionError) return
        authError && notify(authMessageCreator(authError));
        transactionError && notify(transactionMessageCreator(transactionError))
        },[authError, transactionError])
     
}
