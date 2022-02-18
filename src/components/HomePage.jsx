import { useState } from 'react';
import { useFetchContactsQuery } from '../redux/contacts-slice';

const HomePage = contacts => {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isLoading, isError, isFetching } = useFetchContactsQuery(
    pokemonName,
    {
      skip: pokemonName === '',
    }
  );

  const handleSubmit = event => {
    event.preventDefault();
    setPokemonName(event.currentTarget.elements.pokemonName.value);
    event.currentTarget.reset();
  };
  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>
      {isError && (
        <p>
          Упс покемона з ім'ям <b> {pokemonName}</b> немає
        </p>
      )}
      {data && <hi>{data.name}</hi>}
    </>
  );
};

export default HomePage;
