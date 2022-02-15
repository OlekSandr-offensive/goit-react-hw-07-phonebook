import axios from 'axios';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4000';

export const FetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contact');

    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }

  //   axios
  //     .get('/contact')
  //     .then(({ data }) => dispatch(fetchContactSuccess(data)))
  //     .catch(error => dispatch(fetchContactError(error)));
};

export const AddContact =
  ({ name, number }) =>
  dispatch => {
    const contacts = { name: name, number: number };

    dispatch(addContactRequest());

    try {
      const { data } = axios.post('/contacts', contacts);

      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }

    // axios
    //   .post('/contacts', contacts)
    //   .then(({ data }) => dispatch(addContactSuccess(data)))
    //   .catch(error => dispatch(addContactError(error)));
  };

export const deleteContacts = contactId => dispatch => {
  dispatch(deleteContactRequest());

  try {
    const { data } = axios.delete(`/contacts/${contactId}`);

    dispatch(deleteContactSuccess(data));
  } catch (error) {
    dispatch(deleteContactError(error));
  }

  //   axios
  //     .delete(`/contacts/${contactId}`)
  //     .then(() => dispatch(deleteContactSuccess(contactId)))
  //     .catch(error => dispatch(deleteContactError(error)));
};
