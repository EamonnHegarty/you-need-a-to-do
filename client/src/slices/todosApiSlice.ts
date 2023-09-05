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
    updateTodo: builder.mutation({
      query: ({ id, status }) => ({
        url: `${TODOS_URL}/${id}`,
        method: 'PUT',
        body: { status },
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
} = todosApiSlice;
