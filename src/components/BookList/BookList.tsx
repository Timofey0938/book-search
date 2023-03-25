import React, { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import styles from './BookList.module.scss';
import Card from '../Card/Card';

const BookList: FC = () => {
  const { books } = useAppSelector(state => state.resultReducer);

  return (
    <div className={styles.cardList}>
      {books.map(book => (
        <Card book={book} key={book.id} />
      ))}
    </div>
  );
};

export default BookList;