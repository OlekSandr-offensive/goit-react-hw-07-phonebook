import './ContactList.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts-selectors';
import PropTypes from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContacts = id => dispatch(deleteContacts(id));

  return (
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
