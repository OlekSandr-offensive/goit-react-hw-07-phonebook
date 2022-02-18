import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilters = state => state.contacts.filter;
export const isLoading = state => state.contacts.loading;

export const getVisibleContacts = createSelector(
  [getContacts, getFilters, isLoading],
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
