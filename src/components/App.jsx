import './App.css';
import { ToastContainer } from 'react-toastify';
import ContactList from './contacts/ContactList';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import { Home } from './Home';

export default function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <ToastContainer autoClose={3000} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Home />
    </div>
  );
}
