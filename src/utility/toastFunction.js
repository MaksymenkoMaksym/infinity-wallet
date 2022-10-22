import { toast } from 'react-toastify';
const auth = useSelector(state => state.auth);
const transaction = useSelector(state => state.transactions);


export const toastFunction = () => {
let authMessage = null;
const authMessageCreator = auth => {
    switch (auth.error.response.status) {
        case 400:
            authMessage = "Validation error"
            return authMessage;	
        case 401:
            authMessage = "Your token outdated"
            return authMessage;
        case 403:
            authMessage = "Provided password is incorrect"
            return authMessage;
        case 404:
            authMessage = "User with such email not found"	
            return authMessage;
        case 409:
            authMessage = "User with such email already exists"
            return authMessage;
            default:
                return 
        }
}

let transactionMessage = null;
const transactionMessageCreator = transaction => {
    switch (transaction.error.response.status) {
        case 400:
            transactionMessage = "Validation error"
            return transactionMessage;	
        case 401:
            transactionMessage = "Your token outdated"
            return transactionMessage;
        case 403:
            transactionMessage = "User does not owns transaction"
            return transactionMessage;
        case 404:
            transactionMessage = "Transaction category not found"	
            return transactionMessage;
        case 409:
            transactionMessage = "Transaction category type does not match transaction type"
            return transactionMessage;
            default:
                return 
        }
}
 
 return toast.error(auth.error ? authMessageCreator(): transactionMessageCreator(), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
}      


