export const selectTransactions = state => state.transaction.transactions;
export const selectTransactionsForPeriod = state =>
  state.transaction.transactionsForPeriod;
export const selectTransactionCategories = state =>
  state.transaction.transactionCategories;

export const selectErrorTransaction = state => state.transaction.error;
export const selectIsLoadingTransaction = state => state.transaction.isLoading;
export const isModalAddTransactionOpen = state =>
  state.transaction.isModalAddTransactionOpen;
export const modalIsIncome = state => state.transaction.modalIsIncome;
