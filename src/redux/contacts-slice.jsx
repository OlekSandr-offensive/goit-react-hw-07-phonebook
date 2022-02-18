import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62093c148f06050017619019.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts/`,
    }),
  }),
});

export const { useFetchContactsQuery } = contactApi;
