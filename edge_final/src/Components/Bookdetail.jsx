import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from './AddtoDB'; // Assuming these functions exist

const BookDetail = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const navigate = useNavigate();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);

    if (!book) return <p>Book not found</p>;

    const { bookId: currentBookId, image } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id); // Update the stored read list
        navigate('/listed-books'); // Navigate to the Listed Books page
    };

    const handleAddToWishList = (id) => {
        addToStoredWishList(id); // Add to the wish list
    };

    return (
        <div className='my-12'>
            <h2>Book details: {currentBookId}</h2>
            <img className='w-36' src={image} alt="Book cover" />
            <br />
            <button onClick={() => handleMarkAsRead(currentBookId)} className="btn btn-outline btn-accent mr-4">Mark as Read</button>
            <button onClick={() => handleAddToWishList(currentBookId)} className="btn btn-accent">Add to Wish List</button>
        </div>
    );
};

export default BookDetail;