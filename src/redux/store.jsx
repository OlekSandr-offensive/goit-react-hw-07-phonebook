import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import filterSlice from './contacts-reducer';
import { contactsApi } from './contacts-slice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
