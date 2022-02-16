import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:4000';

const errorNotice = () =>
  toast.error(
    "The request couldn't be processed. Some server issue has occured."
  );

export const FetchContacts = createAsyncThunk(
  'contacts/fetchContactSuccess',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      errorNotice();
      return rejectWithValue(error);
    }
  }
);

export const AddContact = createAsyncThunk(
  'contacts/addContactSuccess',
  async ({ name, number }, { rejectWithValue }) => {
    const contacts = { name: name, number: number };
    // const { data } = await axios.post('/contacts', contacts);
    // return data;

    try {
      const { data } = await axios.post('/contacts', contacts);
      return data;
    } catch (error) {
      errorNotice();
      return rejectWithValue(error.errorNotice());
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContactSuccess',
  async (contactId, { rejectWithValue }) => {
    // const { data } = await axios.delete(`/contacts/${contactId}`);
    // return data;
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      errorNotice();
      return rejectWithValue(error);
    }
  }
);

// export const FetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());

//   try {
//     const { data } = await axios.get('/contact');

//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     errorNotice();
//     dispatch(fetchContactError(error));
//   }

//   //   axios
//   //     .get('/contact')
//   //     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//   //     .catch(error => dispatch(fetchContactError(error)));
// };

// export const AddContact =
//   ({ name, number }) =>
//   async dispatch => {
//     const contacts = { name: name, number: number };

//     dispatch(addContactRequest());

//     try {
//       const { data } = await axios.post('/contacts', contacts);

//       dispatch(addContactSuccess(data));
//     } catch (error) {
//       errorNotice();
//       dispatch(addContactError(error));
//     }

//     // axios
//     //   .post('/contacts', contacts)
//     //   .then(({ data }) => dispatch(addContactSuccess(data)))
//     //   .catch(error => dispatch(addContactError(error)));
//     };

// // export const deleteContacts = contactId => async dispatch => {
// //   dispatch(deleteContactRequest());

// //   try {
// //     const { data } = await axios.delete(`/contacts/${contactId}`);

// //     dispatch(deleteContactSuccess(data));
// //   } catch (error) {
// //     errorNotice();
// //     dispatch(deleteContactError(error));
// //   }

//   //   axios
//   //     .delete(`/contacts/${contactId}`)
//   //     .then(() => dispatch(deleteContactSuccess(contactId)))
//   //     .catch(error => dispatch(deleteContactError(error)));
// };
