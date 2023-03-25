import React, { FC } from 'react';
import { IResultStatus } from '@/types/types';
import styles from './SearchResult.module.scss';

interface SearchResultProps {
  resultStatus: IResultStatus;
  foundNumber: number;
}

const SearchResult: FC<SearchResultProps> = ({ resultStatus, foundNumber }) => (
  <>
    {resultStatus.isError && (
      <div className={styles.searchState}>Failed to load</div>
    )}
    {resultStatus.isLoading && (
      <div className={styles.searchState}>Loading...</div>
    )}
    {resultStatus.isSuccess && (
      <div className={styles.searchState}>Found {foundNumber} results</div>
    )}
  </>
);

export default SearchResult;