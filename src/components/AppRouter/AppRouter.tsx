import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage/HomePage';
import BookPage from '@/pages/BookPage/BookPage';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/book' element={<BookPage />} />
    </Routes>
  )
}

export default AppRouter;