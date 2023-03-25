import { Category, SortType } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from '../../config';

interface QueryParams {
  q: string;
  subject?: Category;
  orderBy: SortType;
  startIndex?: number;
  maxResults?: number;
}

// startIndex — позиция в коллекции, с которой следует начать. Индекс первого элемента равен 0.
// maxResults

export const bookAPI = createApi({
  reducerPath: 'bookAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    fetchBooks: build.query<any, QueryParams>({
      query: ({ q, subject, orderBy, startIndex }) => {
        const params: QueryParams = {
          q,
          orderBy,
          startIndex,
          maxResults: 30,
        };

        if (subject !== 'all') {
          params.q += `+subject:${subject}`;
        }
        
        return {
          url: '/books/v1/volumes/',
          params,
        }
      }
    })
  })
})