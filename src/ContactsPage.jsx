import { useFetchContactsQuery } from './redux/contacts-slice';

const ContactPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <>
      <div>ContactPage</div>
      <ul>
        {contacts.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default ContactPage;
