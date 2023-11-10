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

export const editCardThunk = createAsyncThunk(
  "cards/editCards",
  async ({ _id, newCard }, thunkAPI) => {
    try {
        const response = await axios.patch(`/card/${_id}`,newCard);
        return response.data;
    } catch (e) {
      
              return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCardThunk = createAsyncThunk(
  "cards/deleteCards",
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`/card/${_id}`);
      console.log(response)
        return _id;
    } catch (e) {
      
              return thunkAPI.rejectWithValue(e.message);
    }
  }
);