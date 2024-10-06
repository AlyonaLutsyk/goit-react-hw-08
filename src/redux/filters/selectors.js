import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters; 

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.toLowerCase().includes(normalizedFilter) 
    );
  }
);
