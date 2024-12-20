import React, { useState, useEffect } from 'react';
import Book from './Books';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    fetch('./booksData.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch books data');
        }
        return res.json();
      })
      .then(data => setBooks(data))
      .catch(err => setError(err.message)); // Set error if fetching fails
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there's an issue with fetching data
  }

  return (
    <div>
      <h2 className='text-center text-4xl font-bold'>Books</h2>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {books.map(book => (
          <Book key={book.BookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;