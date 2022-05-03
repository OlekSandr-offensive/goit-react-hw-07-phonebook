import './ContactList.scss';
import { useSelector } from 'react-redux';
import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
} from '../../redux/contacts-slice';
import { getFilters } from '../../redux/filters-selectors';
import { Watch } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import PropTypes from 'prop-types';

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContacts] = useDeleteContactsMutation();

  const filters = useSelector(getFilters).toLowerCase();

  const getFilteredContacts = contacts =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filters));
  const filtered = contacts ? getFilteredContacts(contacts) : [];

  return (
    <>
      {filtered && (
        <ul className="ContactList">
          {filtered.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}:<span>{number}</span>
              </p>
              <button type="button" onClick={() => deleteContacts(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {isFetching === true && (
        <Watch height="100" width="100" color="teal" ariaLabel="loading" />
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
