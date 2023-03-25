import { IBook } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IBook = {
  id: '',
  title: '',
  categories: [],
  authors: [],
  image: '',
  description: '',
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBook(state, action: PayloadAction<IBook>) {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.categories = action.payload.categories;
      state.authors = action.payload.authors;
      state.image = action.payload.image;
      state.description = action.payload.description;
    },
  }
});

export const { setBook } = bookSlice.actions;
export default bookSlice.reducer;