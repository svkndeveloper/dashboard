import { configureStore, applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { authReducer } from 'redux/auth/slice';
import { cardsReducer } from './cards/cardsSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token','accessToken', 'refreshToken', 'sid','currentUser'],
};
          
export const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      cards: cardsReducer,
          },
         middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
}, applyMiddleware(thunk))

 export const persistor = persistStore(store)