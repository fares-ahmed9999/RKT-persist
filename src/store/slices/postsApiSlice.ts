import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], null>({
      query: () => `/posts`,
    }),
    getTodos: builder.query<TodoType[], null>({
      query: () => `/todos`,
    }),

    addNewPost: builder.mutation<PostType, PostType>({
      query: (post) => ({
        url: "/postss",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useGetTodosQuery, useAddNewPostMutation } =
  postsApi;
