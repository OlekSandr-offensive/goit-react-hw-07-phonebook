import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const initialContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const items = createReducer(initialContacts, {
  [actions.AddContact]: (state, { payload }) => ({
    ...state,
    contacts: [payload, ...state.contacts],
  }),
  [actions.deleteContacts]: (state, { payload }) => ({
    ...state,
    contacts: state.contacts.filter(({ id }) => id !== payload),
  }),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
