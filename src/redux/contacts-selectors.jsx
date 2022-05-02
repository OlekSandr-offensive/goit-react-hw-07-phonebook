import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilters = state => state.filter;

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
