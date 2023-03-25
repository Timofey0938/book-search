export type Category = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry';
export type SortType = 'relevance' | 'newest';

export interface IBook {
  id: string;
  title: string;
  categories: string[];
  authors: string[];
  image: string;
  description: string;
};

export interface ISearch {
  searchString: string;
  category: Category;
  sortType: SortType;
};

export interface IResultStatus {
  isLoading: Boolean;
  isSuccess: Boolean;
  isError: Boolean;
};