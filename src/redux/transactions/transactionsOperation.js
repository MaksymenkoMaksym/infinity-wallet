import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/';

export const getTransactionCategories = createAsyncThunk(
  'transaction/getTransactionCategories',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('api/transaction-categories');
      console.log('getTransactionCategories', response);

      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

// Create new transaction for logged in user
export const createTransaction = createAsyncThunk(
  'transaction/createTransaction',
  async (transaction, thunkApi) => {
    try {
      const response = await axios.post('/api/transactions', transaction);
      console.log('registerUser', response);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
// Get all transactions for logged in user
export const getAllTransactions = createAsyncThunk(
  'transaction/getAllTransactions',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('api/transactions');
      console.log('getAllTransactions', response);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
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
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async ({ id }, thunkApi) => {
    try {
      const response = await axios.delete(`api/transactions/${id}`);
      console.log('logOutUser', response);
      return id;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
// Get transactions summary for period
export const getTransactionsForPeriod = createAsyncThunk(
  'transaction/getTransactionsForPeriod',
  async (date, thunkApi) => {
    try {
      const response = await axios.get(
        `api/transactions?month=${date.month}&year=${date.year}`
      );
      console.log('get Transactions For Period', response);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
