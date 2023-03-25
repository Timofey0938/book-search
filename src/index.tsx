import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import AppRouter from './components/AppRouter/AppRouter';

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app'));

const store = setupStore();

root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);