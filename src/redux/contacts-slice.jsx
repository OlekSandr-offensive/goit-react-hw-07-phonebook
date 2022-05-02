import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62093c148f06050017619019.mockapi.io/api/v1',
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts/`,
      providesTags: ['contact'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: `/contacts/`,
        method: 'POST',
        body: {
          content: newContact,
        },
      }),
      invalidatesTags: ['contact'],
    }),
    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactsMutation,
} = contactsApi;

// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   endpoints: builder => ({
//     getPokemonByName: builder.query({
//       query: name => `pokemon/${name}`,
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi;
