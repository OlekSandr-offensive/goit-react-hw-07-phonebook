// export const getContacts = state => state.contacts.items.contacts;
// export const getFilters = state => state.contacts.filter;

// export const getVisibleContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilters(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilters = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilters],
  (contacts, filter) => {
    const getFilteredContacts = contacts => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    };

    return getFilteredContacts(contacts);
  }
);
