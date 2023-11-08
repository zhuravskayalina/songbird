import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Game from './routes/Game.tsx';
import Layout from './Layout.tsx';
import Gallery from './routes/Gallery.tsx';
import Results from './routes/Results.tsx';
import { Provider } from 'react-redux';
import store from '../store/store.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'game',
        element: <Game />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'results',
        element: <Results />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
