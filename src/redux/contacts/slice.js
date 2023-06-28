import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import persistReducer from 'redux-persist/es/persistReducer';

import storage from 'redux-persist/lib/storage';

const initialState = { value: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.value.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: { name, number, id: nanoid() },
        };
      },
    },
    deleteContact(state, action) {
      const newContacts = state.value.filter(({ id }) => id !== action.payload);
      state.value = newContacts;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contacts.value;
