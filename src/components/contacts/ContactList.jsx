import './ContactList.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts, FetchContacts } from '../../redux/contacts-operations';
import { getVisibleContacts, isLoading } from '../../redux/contacts-selectors';
import { Watch } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import PropTypes from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchContacts());
  }, [dispatch]);

  const onDeleteContacts = id => {
    dispatch(deleteContacts(id));
    // dispatch(FetchContacts());
  };

  return (
    <>
      {contacts.length > 0 && (
        <ul className="ContactList">
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}:<span>{number}</span>
              </p>
              <button type="button" onClick={() => onDeleteContacts(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {isLoading === true && (
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
