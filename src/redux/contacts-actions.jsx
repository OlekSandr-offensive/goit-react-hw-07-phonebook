import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const AddContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
}));

export const deleteContacts = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');
