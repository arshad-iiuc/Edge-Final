import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './components/Root.jsx';
import NavBar from './components/NavBar.jsx';
import Library from './components/Library.jsx';
import HomePage from './components/HomePage.jsx';
import Search from './components/search.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      // {
      //   path: 'books/:bookId',
      //   element: <BookDetail />,
      //   loader: () => fetch('/booksData.json'), // Load books data when navigating to this route
      // },
      // {
      //   path: 'listedbook', // Use a consistent lowercase path for routes
      //   element: <ListedBook />,
      //   loader: () => fetch('/BooksData.json'), 
      // },
    ],
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);