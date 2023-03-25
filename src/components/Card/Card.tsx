import React, { FC } from 'react';
import { IBook } from '@/types/types';
import { useAppDispatch } from '@/hooks/redux';
import { setBook } from '@/store/slices/bookSlice';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.scss';

interface CardProps {
  book: IBook;
}

const Card: FC<CardProps> = ({ book }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const openBook = () => {
    dispatch(setBook(book));
    navigate('/book');
  };

  return (
    <div className={styles.card} onClick={openBook}>
      <img className={styles.image} src={book.image} alt='' />
      <div className={styles.title}>{book.title}</div>
      {book.authors?.length > 0 ? (
        <div className={styles.authors}>{book.authors.join(', ')}</div>
      ) : ''}
      <div className={styles.category}>
        {book.categories?.length > 0 ?
        <>Category:&nbsp; {book.categories[0]}</> : ''}
      </div>
    </div>
  );
};

export default Card;
