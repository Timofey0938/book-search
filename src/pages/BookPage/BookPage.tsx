import React, { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import styles from './BookPage.module.scss';

const BookPage: FC = () => {
  const book = useAppSelector(state => state.bookReducer);
  const bookImage = book.image?.replace(/zoom=./, 'zoom=0');

  return (
    <div className={styles.book}>
      <img className={styles.image} src={bookImage} alt='' />
      <div className={styles.bookInfo}>
        <div className={styles.title}>{book.title}</div>
        {book.description && <div className={styles.authors}>{book.authors.join(', ')}</div>}
        {book.categories?.length > 0 && <div className={styles.categories}>
          Categories: {book.categories.join(', ')}
        </div>}
        {book.description && <div className={styles.description}>{book.description}</div>}
      </div>
    </div>
  );
};

export default BookPage;

