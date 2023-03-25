import React, { FC, useEffect, useState } from 'react';
import { IBook, IResultStatus } from '@/types/types';
import Search from '@/components/Search/Search';
import SearchResult from '@/components/SearchResult/SearchResult';
import BookList from '@/components/BookList/BookList';
import { bookAPI } from '@/services/books';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { Button } from '@chakra-ui/react';
import styles from './HomePage.module.scss';
import { setResult } from '@/store/slices/resultSlice';

interface BookItem {
  id: string;
  volumeInfo: {
    title: string;
    categories: string[];
    authors: string[];
    imageLinks: {
      smallThumbnail: string;
    };
    description: string;
  };
};

const HomePage: FC = () => {
  const dispatch = useAppDispatch();

  const searchParametrs = useAppSelector(state => state.searchReducer);
  const { books } = useAppSelector(state => state.resultReducer);

  const [ fetchBooks, result ] = bookAPI.useLazyFetchBooksQuery();

  const [foundNumber, setFoundNumber] = useState<number>(0);
  const [resultStatus, setResultStatus] = useState<IResultStatus>({
    isLoading: false,
    isSuccess: false,
    isError: false,
  });
 
  const search = () => fetch(0);
  const loadMore = () => fetch(books.length);

  const fetch = (startIndex: number) => {
    fetchBooks({
      q: searchParametrs.searchString,
      subject: searchParametrs.category,
      orderBy: searchParametrs.sortType,
      startIndex,
    }, false);
  };

  useEffect(() => {
    setResultStatus({
      isLoading: result.isLoading,
      isSuccess: result.isSuccess,
      isError: result.isError,
    });

    if (!result.isFetching && result.isSuccess) {
      const fetchedBooks = result.data.items.map((item: BookItem) => ({
        id: item.id,
        title: item.volumeInfo.title,
        categories: item.volumeInfo.categories,
        authors: item.volumeInfo.authors,
        image: item.volumeInfo.imageLinks?.smallThumbnail,
        description: item.volumeInfo.description,
      }));

      if (result.originalArgs.startIndex === 0) {
        setFoundNumber(result.data.totalItems);
        dispatch(setResult(fetchedBooks));
      } else {
        dispatch(setResult([...books, ...fetchedBooks]));
      }
    }
  }, [result]);

  return (
    <>
      <div className={styles.title}>Book search</div>
      <Search search={search} isFetching={result.isFetching} />
      <SearchResult resultStatus={resultStatus} foundNumber={foundNumber} />
      {books?.length > 0 && (
        <>
          <BookList />
          <Button
            className={styles.loadMoreButton}
            size='lg'
            onClick={loadMore}
            isLoading={result.isFetching}
          >
            Load more
          </Button>
        </>
      )}
      
    </>
  )
};

export default HomePage;