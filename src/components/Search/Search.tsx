import React, { FC, ChangeEvent, KeyboardEvent } from 'react';
import { Category, SortType } from '@/types/types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setSearchString, setCategory, setSortType } from '@/store/slices/searchSlice';
import { Input, Button, Select } from '@chakra-ui/react';
import styles from './Search.module.scss';

interface SearchProps {
  search: () => void;
  isFetching: boolean;
}

const Search: FC<SearchProps> = ({ search, isFetching }) => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector(state => state.searchReducer);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchString(e.target.value));
  };

  const handleCategorySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(e.target.value as Category));
  };

  const handleSortTypeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortType(e.target.value as SortType));
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <>
      <div className={styles.search}>
        <Input
          size='lg'
          isDisabled={isFetching}
          value={searchParams.searchString}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyPress(e)}
        />
        <Button
          className={styles.button}
          size='lg'
          onClick={search}
          isDisabled={searchParams.searchString === ''}
          isLoading={isFetching}
        >
          Search
        </Button>
      </div>
      <div className={styles.searchParametrs}>
        <div className={styles.parametrBlock}>
          <div className={styles.parametrName}>Categories</div>
          <Select
            width='300px'
            size='sm'
            value={searchParams.category}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleCategorySelect(e)}
          >
            <option value='all'>all</option>
            <option value='art'>art</option>
            <option value='biography'>biography</option>
            <option value='computers'>computers</option>
            <option value='history'>history</option>
            <option value='medical'>medical</option>
            <option value='poetry'>poetry</option>
          </Select>
        </div>
        <div className={styles.parametrBlock}>
          <div className={styles.parametrName}>Sorting by:</div>
          <Select
            width='300px'
            size='sm'
            value={searchParams.sortType}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSortTypeSelect(e)}
          >
            <option value='relevance'>relevance</option>
            <option value='newest'>newest</option>
          </Select>
        </div>
      </div>
    </>
  )
};

export default Search;