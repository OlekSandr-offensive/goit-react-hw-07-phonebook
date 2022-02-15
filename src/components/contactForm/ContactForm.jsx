import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddContact } from '../../redux/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts-selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.scss';

// import { ContactForm } from './ContactForm.styles';

// const { AddContact } = actions;

export default function ContactForm() {
  const contacts = useSelector(getVisibleContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChanged = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const findContact = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (findContact) {
      toast.error(`${name} is already in contacts.`);
      reset();
    } else {
      dispatch(AddContact({ name, number }));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          onChange={handleInputChanged}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          onChange={handleInputChanged}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
