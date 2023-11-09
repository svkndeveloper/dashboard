import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://questify-backend.goit.global/';

export const getCardsThunk = createAsyncThunk(
     'cards/getCards',
    async (_, thunkAPI) => {
    try {
        const response = await axios.get('/card');
        return response.data

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const addCardThunk = createAsyncThunk(
  "cards/addCards",
  async (card, thunkAPI) => {
    try {
        const response = await axios.post('/card', card);
        return response.data;
    } catch (e) {
              return thunkAPI.rejectWithValue(e.message);
    }
  }
);