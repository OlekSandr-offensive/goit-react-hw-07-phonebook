import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import {
  AddContact,
  FetchContacts,
  deleteContacts,
} from './contacts-operations';

const {
  addContactSuccess,
  changeFilter,
  deleteContactSuccess,
  fetchContactSuccess,
  fetchContactError,
  fetchContactRequest,
} = actions;

// const initialContacts = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

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
