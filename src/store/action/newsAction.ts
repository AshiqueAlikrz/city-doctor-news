import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

export interface NewsItem extends Post {
  author: User;
}

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
    getUserById: builder.query<User, number>({
      query: (id) => `users/${id}`,
    }),
    getNews: builder.query<NewsItem[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const postsResult = await fetchWithBQ("posts");
        if (postsResult.error) return { error: postsResult.error };

        const usersResult = await fetchWithBQ("users");
        if (usersResult.error) return { error: usersResult.error };

        const posts = postsResult.data as Post[];
        const users = usersResult.data as User[];

        const newsItems: NewsItem[] = posts.map((post) => ({
          ...post,
          author: users.find((user) => user.id === post.userId) || users[0],
        }));

        return { data: newsItems };
      },
    }),
    getNewsById: builder.query<NewsItem, number>({
      async queryFn(id, _queryApi, _extraOptions, fetchWithBQ) {
        const postResult = await fetchWithBQ(`posts/${id}`);
        if (postResult.error) return { error: postResult.error };

        const post = postResult.data as Post;

        const userResult = await fetchWithBQ(`users/${post.userId}`);
        if (userResult.error) return { error: userResult.error };

        const user = userResult.data as User;

        return { data: { ...post, author: user } };
      },
    }),
  }),
});

export const { useGetPostsQuery, useGetUsersQuery, useGetPostByIdQuery, useGetUserByIdQuery, useGetNewsQuery, useGetNewsByIdQuery } = newsApi;
