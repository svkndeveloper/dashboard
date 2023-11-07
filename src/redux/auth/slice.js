import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  pending: false,
  accessToken: null,
  refreshToken: null,
  sid: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    },
  extraReducers: builder =>
    builder.addCase(register.fulfilled, (state, action) => {
    console.log(action)      
    })
      .addCase(register.rejected, (state, action) => {
       console.log(action)
        state.error = action.payload;
        state.pending = false;
    })
    .addCase(logIn.pending,state => {
      state.pending = true;
      state.error = null;
    })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log(action)
        state.user = action.payload.userData;
        state.sid = action.payload.sid;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
       state.pending = false;
    })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.pending = false;
    })
      .addCase(logOut.fulfilled, state => {
      state.user = { name: null, email: null };
      state.accessToken = null;
      state.isLoggedIn = false;
    })
    .addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.sid = action.payload.newSid;
        state.accessToken = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
    })
    .addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
    })
  },
);

export const authReducer = authSlice.reducer;
