import { Category, ISearch, SortType } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ISearch = {
  searchString: '',
  category: 'all',
  sortType: 'relevance',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchString(state, action: PayloadAction<string>) {
      state.searchString = action.payload;
    },
    setCategory(state, action: PayloadAction<Category>) {
      state.category = action.payload;
    },
    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },
  }
});

export const {
  setSearchString, 
  setCategory,
  setSortType
} = searchSlice.actions;
export default searchSlice.reducer;