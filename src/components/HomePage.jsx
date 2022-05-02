import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../redux/contacts-slice';

// const HomePage = contacts => {
//   const [pokemonName, setPokemonName] = useState('');
//   const { data, error, isLoading, isError, isFetching } = useFetchContactsQuery(
//     pokemonName,
//     {
//       skip: pokemonName === '',
//     }
//   );

//   const handleSubmit = event => {
//     event.preventDefault();
//     setPokemonName(event.currentTarget.elements.pokemonName.value);
//     event.currentTarget.reset();
//   };
//   return (
//     <>
//       <form autoComplete="off" onSubmit={handleSubmit}>
//         <input type="text" name="pokemonName" />
//         <button type="submit">Search</button>
//       </form>
//       {isError && (
//         <p>
//           Упс покемона з ім'ям <b> {pokemonName}</b> немає
//         </p>
//       )}
//       {data && <hi>{data.name}</hi>}
//     </>
//   );
// };

// export default HomePage;

const HomePage = contacts => {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isLoading, isError, isFetching } =
    useGetPokemonByNameQuery(pokemonName, {
      skip: pokemonName === '',
    });

  const handleSubmit = event => {
    event.preventDefault();
    setPokemonName(event.currentTarget.elements.pokemonName.value);
    event.currentTarget.reset();
  };

  console.log(data);
  console.log(error);
  console.log(isFetching);

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
