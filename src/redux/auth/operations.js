import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://questify-backend.goit.global/';

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const token = {
    set(token) {
         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials, config);
      console.log(data)
      token.set(data.accessToken);
      return data;
    } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
      try {
      const { data } = await axios.post('/auth/register', credentials, config);
      console.log(data)
      if (data) {
       thunkAPI.dispatch(logIn(credentials));
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    
    const state = thunkAPI.getState();
    
    const persistedToken = state.auth.refreshToken;
    const sid = state.auth.sid;
    if (persistedToken === null) {
     return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      token.set(persistedToken);
      const { data }  = await axios.post('/auth/refresh',{sid});
      token.set(data.newAccessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
