import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'redux/auth/authOperation';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://wallet.goit.ua/';

export const getTransactionCategories = createAsyncThunk(
  'transaction/getTransactionCategories',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('api/transaction-categories');
      // console.log('getTransactionCategories', response);

      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      toast.error('Something went wrong :(', {
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
  }
);

// Create new transaction for logged in user
export const createTransaction = createAsyncThunk(
  'transaction/createTransaction',
  async (transaction, thunkApi) => {
    try {
      const response = await axios.post('/api/transactions', transaction);
      // console.log('createTransaction', response.data);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      toast.error('Transaction not created :(', {
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
      thunkApi.rejectWithValue(error);
      toast.error('There are no one transaction :(', {
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
  }
);

// Update transaction
export const updateTransaction = createAsyncThunk(
  'transaction/updateTransaction',
  async ({ id, ...transaction }, thunkApi) => {
    try {
      const response = await axios.patch(`api/transactions/${id}`, transaction);
      console.log('updateTransaction', response);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      toast.error('Transaction not updated :(', {
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
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(`api/transactions/${id}`);
      console.log('transaction/deleteTransaction', response);
      return id;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      toast.error('Transaction not deleted :(', {
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
      thunkApi.rejectWithValue(error);
      toast.error('Something went wrong :(', {
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
  }
);
