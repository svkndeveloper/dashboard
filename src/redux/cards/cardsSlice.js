import { createSlice } from '@reduxjs/toolkit';
import { addCardThunk,getCardsThunk } from './operations';
const initialState = {
    cardType: null,
    cards: [],
    error: null,
    isLoading: null,
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        pickCardType(state, action) {
           state.cardType = action.payload
        }
    },
    extraReducers: builder =>
    builder.addCase(addCardThunk.pending, (state) => {
    state.isLoading = true; 
    })
            .addCase(addCardThunk.fulfilled, (state, action) => {
                console.log(state.cards)
        state.isLoading = false;
                state.error = null;
               
      state.cards = [...state.cards, action.payload.createdCard];
            })
            .addCase(addCardThunk.rejected, (state, action) => {
               
         state.isLoading = false;
      state.error = action.payload;
            })
    .addCase(getCardsThunk.pending, (state) => {
    state.isLoading = true; 
    })
            .addCase(getCardsThunk.fulfilled, (state, action) => {
                console.log(action)
        state.isLoading = false;
      state.error = null;
      state.cards = action.payload.cards;
            })
            .addCase(getCardsThunk.rejected, (state, action) => {
                console.log(action)
         state.isLoading = false;
      state.error = action.payload;
    })
})

export const cardsReducer = cardsSlice.reducer
export const { pickCardType} = cardsSlice.actions;