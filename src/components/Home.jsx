// import { useState } from 'react';
// import { useGetPokemonByNameQuery } from '../redux/contacts-slice';

// export const Home = () => {
//   const [pokemonName, setPokemonName] = useState('');
//   const { data, error, isLoading, isError } = useGetPokemonByNameQuery(
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
//           Упс покемона з ім'ям <b> {pokemonName}</b> немає :(
//         </p>
//       )}
//       {data && <hi>{data.name}</hi>}
//     </>
//   );
// };
