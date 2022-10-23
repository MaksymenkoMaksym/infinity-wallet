import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'redux/auth/authOperation';

axios.defaults.baseURL = 'https://wallet.goit.ua/';

export const getTransactionCategories = createAsyncThunk(
  'transaction/getTransactionCategories',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('api/transaction-categories');
      // console.log('getTransactionCategories', response);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Create new transaction for logged in user
export const createTransaction = createAsyncThunk(
  'transaction/createTransaction',
  async (transaction, thunkApi) => {
    try {
      const response = await axios.post('/api/transactions', transaction);
      console.log('createTransaction', response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);
// Get all transactions for logged in user
export const getAllTransactions = createAsyncThunk(
  'transaction/getAllTransactions',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('api/transactions');
      // console.log('getAllTransactions', response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

// Update transaction
export const updateTransaction = createAsyncThunk(
  'transaction/updateTransaction',
  async ({ id, ...transaction }, thunkApi) => {
    // console.log('export const updateTransaction', transaction);
    const oldSum = thunkApi.getState().transaction.modalData.amount;
    // const oldType = thunkApi.getState().transaction.modalData.type;
    // console.log('thunk', oldSum, oldType, transaction);
    try {
      const response = await axios.patch(`api/transactions/${id}`, transaction);
      console.log('updateTransaction', response);
      const newSum = response.data.amount - oldSum;
      return { response: response.data, newSum };
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (item, thunkApi) => {
    try {
      const response = await axios.delete(`api/transactions/${item.id}`);
      console.log('transaction/deleteTransaction', response);
      // const sum = item.type === 'INCOME' ? item.amount : item.amount * -1;
      // console.log(sum);
      return { id: item.id, sum: item.amount };
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);
// Get transactions summary for period
export const getTransactionsForPeriod = createAsyncThunk(
  'transaction/getTransactionsForPeriod',
  async (date, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    setAuthHeader(persistedToken);

    if (persistedToken === null) {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }

    try {
      const response = await axios.get(
        `api/transactions-summary?month=${date.month}&year=${date.year}`
      );
      // console.log('get Transactions For Period', response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);
