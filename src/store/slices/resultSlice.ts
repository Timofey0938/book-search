import { IBook } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ResultState = {
  books: IBook[],
};

const initialState: ResultState = {
  books: [],
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult(state, action: PayloadAction<IBook[]>) {
      state.books = action.payload;
    },
  }
});

export const { setResult } = resultSlice.actions;
export default resultSlice.reducer;