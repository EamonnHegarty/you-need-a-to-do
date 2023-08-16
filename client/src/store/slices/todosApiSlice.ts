import { TODOS_URL } from '../../constants';
import { IData } from '../../interfaces/IData';
import { apiSlice } from './apiSlice';

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<IData[], void>({
      // <-- Using IData[] for result and void for query args
      query: () => ({
        // Since no args, you can directly return the query configuration
        url: TODOS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetTodosQuery } = todosApiSlice;
