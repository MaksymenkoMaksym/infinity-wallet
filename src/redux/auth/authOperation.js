import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://wallet.goit.ua/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/registerUser ',
  async (user, thunkApi) => {
    try {
      const response = await axios.post('/api/auth/sign-up', user);
      setAuthHeader(response.data.token);
      // console.log('registerUser', response);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      toast.error('An account is already registered with your email', {
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

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user, thunkApi) => {
    try {
      const response = await axios.post('/api/auth/sign-in', user);
      setAuthHeader(response.data.token);

      // console.log('loginUser', response);

      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      toast.error('Login or password is incorrect!', {
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
export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, thunkApi) => {
    try {
      const response = await axios.delete('/api/auth/sign-out');
      clearAuthHeader();
      // console.log('logOutUser', response);
      return response.data;
    } catch (error) {
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
      thunkApi.rejectWithValue(error);
      // console.log(error);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    setAuthHeader(persistedToken);

    if (persistedToken === null) {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }

    try {
      const response = await axios.get('/api/users/current');
      // console.log('getUser', response);

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
