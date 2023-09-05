import { TODOS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: TODOS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    createTodo: builder.mutation({
      query: (data) => ({
        url: `${TODOS_URL}`,
        method: 'POST',
        body: { ...data },
      }),
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation } = todosApiSlice;
