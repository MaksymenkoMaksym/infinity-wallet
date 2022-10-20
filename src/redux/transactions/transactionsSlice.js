import { createSlice } from '@reduxjs/toolkit';
import {
  createTransaction,
  deleteTransaction,
  getAllTransactions,
  getTransactionCategories,
  getTransactionsForPeriod,
  updateTransaction,
} from './transactionsOperation';

const transactions = [
  {
    transactionDate: '2022-10-19',
    type: 'EXPENSE',
    categoryId: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
    comment: 'oil',
    amount: -20,
    balanceAfter: -20,
    id: 'f6b9aa36-afcb-4625-9b02-d97c025fc9d1',
    userId: '93b87441-cb9e-440f-9b50-c81109c0a0de',
  },
];
const transactionsForPeriod = {
  categoriesSummary: [
    {
      name: 'Car',
      type: 'EXPENSE',
      total: -20,
    },
  ],
  incomeSummary: 0,
  expenseSummary: -20,
  periodTotal: -20,
  year: 2022,
  month: 10,
};
const transactionCategories = [
  {
    id: 'c9d9e447-1b83-4238-8712-edc77b18b739',
    name: 'Main expenses',
    type: 'EXPENSE',
  },
  {
    id: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
    name: 'Products',
    type: 'EXPENSE',
  },
  {
    id: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
    name: 'Car',
    type: 'EXPENSE',
  },
  {
    id: 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4',
    name: 'Self care',
    type: 'EXPENSE',
  },
  {
    id: '76cc875a-3b43-4eae-8fdb-f76633821a34',
    name: 'Child care',
    type: 'EXPENSE',
  },
  {
    id: '128673b5-2f9a-46ae-a428-ec48cf1effa1',
    name: 'Household products',
    type: 'EXPENSE',
  },
  {
    id: '1272fcc4-d59f-462d-ad33-a85a075e5581',
    name: 'Education',
    type: 'EXPENSE',
  },
  {
    id: 'c143130f-7d1e-4011-90a4-54766d4e308e',
    name: 'Leisure',
    type: 'EXPENSE',
  },
  {
    id: '719626f1-9d23-4e99-84f5-289024e437a8',
    name: 'Other expenses',
    type: 'EXPENSE',
  },
  {
    id: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402',
    name: 'Entertainment',
    type: 'EXPENSE',
  },
  {
    id: '063f1132-ba5d-42b4-951d-44011ca46262',
    name: 'Income',
    type: 'INCOME',
  },
];

const userInitialState = {
  transactions,
  transactionsForPeriod,
  transactionCategories,
  isLoading: false,
  error: null,
  isModalAddTransactionOpen: false,
};

const pendingHandlerAuth = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const transactionSlice = createSlice({
  name: 'transaction',

  initialState: userInitialState,

  reducers: {
    openModal(state, action) {
      state.isModalAddTransactionOpen = true;
    },
    closeModal(state, action) {
      state.isModalAddTransactionOpen = false;
    },
  },
  extraReducers: {
    [createTransaction.pending]: pendingHandlerAuth,
    [getAllTransactions.pending]: pendingHandlerAuth,
    [updateTransaction.pending]: pendingHandlerAuth,
    [deleteTransaction.pending]: pendingHandlerAuth,
    [createTransaction.rejected]: rejectedHandler,
    [getAllTransactions.rejected]: rejectedHandler,
    [updateTransaction.rejected]: rejectedHandler,
    [deleteTransaction.rejected]: rejectedHandler,
    [getTransactionsForPeriod.pending]: pendingHandlerAuth,
    [getTransactionsForPeriod.rejected]: rejectedHandler,
    [getTransactionCategories.pending]: pendingHandlerAuth,
    [getTransactionCategories.rejected]: rejectedHandler,

    [createTransaction.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.transactions.push(action.payload);
      state.isModalAddTransactionOpen = false;
    },

    [getAllTransactions.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.transactions = action.payload;
    },

    [updateTransaction.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.transactions = state.transactions.map(transaction =>
        transaction.id === action.payload.id ? action.payload : transaction
      );
    },

    [deleteTransaction.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.transactions = state.transactions.filter(
        transaction => transaction.id !== action.payload.id
      );
    },

    [getTransactionsForPeriod.fulfilled](state, action) {
      state.transactionsForPeriod = action.payload;
      state.error = null;
      state.isLoading = false;
    },

    [getTransactionCategories.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.transactionCategories = action.payload;
    },
  },
});

export const { openModal, closeModal } = transactionSlice.actions;
export const transactionReducer = transactionSlice.reducer;
