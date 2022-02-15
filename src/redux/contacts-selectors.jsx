export const getContacts = state => state.contacts.items.contacts;
export const getFilters = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilters(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
