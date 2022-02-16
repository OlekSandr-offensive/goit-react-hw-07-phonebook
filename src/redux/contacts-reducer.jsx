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

export default combineReducers({
  items,
  filter,
  error,
});
