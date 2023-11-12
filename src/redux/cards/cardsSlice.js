import { createSlice } from '@reduxjs/toolkit';
import { addCardThunk,getCardsThunk,editCardThunk,deleteCardThunk,completeCardThunk } from './operations';
const initialState = {
    cardType: null,
    cards: [],
    error: null,
    isLoading: null,
    editStatus: false,
    doneCards: [],
   
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
           pickCardType(state, action) {
           state.cardType = action.payload
        },
        changeEditStatus(state, action) {
           state.editStatus = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(completeCardThunk.pending, (state) => {
    state.isLoading = true; 
    })
            .addCase(completeCardThunk.fulfilled, (state, action) => {
                console.log(action)
                state.doneCards = [action.payload.completedCard, ...state.doneCards]
                state.cards = state.cards.filter(item=>item._id !== action.payload.completedCard._id )
                state.isLoading = false;
                state.error = null;
                     })
            .addCase(completeCardThunk.rejected, (state, action) => {
               console.log(action)
         state.isLoading = false;
      state.error = action.payload;
            })
            .addCase(addCardThunk.pending, (state) => {
    state.isLoading = true; 
    })
            .addCase(addCardThunk.fulfilled, (state, action) => {
                
        state.isLoading = false;
                state.error = null;
               
      state.cards = [action.payload.createdCard, ...state.cards];
            })
            .addCase(addCardThunk.rejected, (state, action) => {
               
         state.isLoading = false;
      state.error = action.payload;
            })
    .addCase(getCardsThunk.pending, (state) => {
    state.isLoading = true; 
    })
            .addCase(getCardsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
                state.error = null;
                state.cards = action.payload.cards.filter(item => item.status === 'Incomplete');
             state.doneCards = action.payload.cards.filter(item=>item.status === 'Complete');
            })
            .addCase(getCardsThunk.rejected, (state, action) => {
                
         state.isLoading = false;
      state.error = action.payload;
            })
    .addCase(editCardThunk.pending, (state) => {
    state.isLoading = true; 
    })
            .addCase(editCardThunk.fulfilled, (state, action) => {
      state.isLoading = false;
                state.error = null;
                console.log(action.payload)
                state.cards = state.cards.map(item => {
                    if (item._id === action.payload.editedCard._id) {
                     
                        return action.payload.editedCard;
                    } else {
                    
                        return item;
                    }
                })
            })
            .addCase(editCardThunk.rejected, (state, action) => {
                console.log(action.payload)
         state.isLoading = false;
      state.error = action.payload;
            })
       .addCase(deleteCardThunk.pending, (state) => {
    state.isLoading = true; 
    })
            .addCase(deleteCardThunk.fulfilled, (state, action) => {
      state.isLoading = false;
                state.error = null;
                console.log(action.payload)
                state.cards = state.cards.filter(item => item.status === 'Incomplete' && item._id !== action.payload);
                state.doneCards = state.doneCards.filter(item => item.status === 'Complete' && item._id !== action.payload);
            })
            .addCase(deleteCardThunk.rejected, (state, action) => {
                console.log(action.payload)
         state.isLoading = false;
      state.error = action.payload;
    })
})

export const cardsReducer = cardsSlice.reducer
export const { pickCardType,changeEditStatus} = cardsSlice.actions;