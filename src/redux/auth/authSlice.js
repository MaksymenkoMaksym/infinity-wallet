import { createSlice } from '@reduxjs/toolkit';
import { getUser, loginUser, logOutUser, registerUser } from './operation';

const userInitialState = {
  user: {
    id: 'string',
    username: 'infinity',
    email: 'infinity@gmail.com',
    password: 'infinity26',
    balance: 0,
  },
  token: null,
  isLoading: false,
  error: null,
};
const pendingHandlerAuth = (state, action) => {
  state.isLoading = true;
  state.error = null;
};
const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const authSlice = createSlice({
  name: 'auth',

  initialState: userInitialState,

  reducers: {
    addTask(state, action) {},
    deleteTask(state, action) {},
    toggleCompleted(state, action) {},
  },
  extraReducers: {
    [registerUser.pending]: pendingHandlerAuth,
    [loginUser.pending]: pendingHandlerAuth,
    [logOutUser.pending]: pendingHandlerAuth,
    [getUser.pending]: pendingHandlerAuth,
    [registerUser.rejected]: rejectedHandler,
    [loginUser.rejected]: rejectedHandler,
    [logOutUser.rejected]: rejectedHandler,
    [getUser.rejected]: rejectedHandler,
    [registerUser.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    [loginUser.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    [logOutUser.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.user = {};
      state.token = null;
    },

    [getUser.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.user = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
