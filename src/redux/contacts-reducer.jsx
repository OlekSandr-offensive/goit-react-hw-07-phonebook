import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import {
  AddContact,
  FetchContacts,
  deleteContacts,
} from './contacts-operations';

const { changeFilter } = actions;

const items = createReducer([], {
  [FetchContacts.fulfilled]: (_, { payload }) => payload,
  [AddContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [FetchContacts.rejected]: (_, { payload }) => payload,
  [FetchContacts.pending]: () => null,
});

const isLoading = createReducer(false, {
  [FetchContacts.pending]: () => true,
  [FetchContacts.fulfilled]: () => false,
  [FetchContacts.rejected]: () => false,
  [AddContact.pending]: () => true,
  [AddContact.fulfilled]: () => false,
  [AddContact.rejected]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  error,
  isLoading,
});
