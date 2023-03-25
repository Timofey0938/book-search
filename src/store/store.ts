import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import resultReducer from './slices/resultSlice';
import bookReducer from './slices/bookSlice';
import { bookAPI } from '@/services/books';

const rootReducer = combineReducers({
  searchReducer,
  resultReducer,
  bookReducer,
  [bookAPI.reducerPath]: bookAPI.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDifaultMiddleware) =>
      getDifaultMiddleware().concat(bookAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export { setupStore };