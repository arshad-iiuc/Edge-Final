import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from './AddtoDB';  // Assuming you have this utility function
import Book from './Book';

const ListedBook = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();  // Assuming books data is fetched via this

    // Debugging: Check if allBooks is loaded properly
    console.log("All books:", allBooks);

    useEffect(() => {
        if (Array.isArray(allBooks) && allBooks.length > 0) {
            const storedReadList = getStoredReadList() || [];
            console.log("Stored read list IDs:", storedReadList);

            const storedReadListInt = storedReadList.map(id => parseInt(id, 10));
            const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
            setReadList(readBookList);
            
            // Debugging: Check if readList is populated correctly
            console.log("Read list after filtering:", readBookList);
        }
    }, [allBooks]);

    useEffect(() => {
        if (sort) {
            handleSort(sort);  // Reapply the sorting whenever `sort` changes
        }
    }, [sort, readList]);

    const handleSort = (sortType) => {
        setSort(sortType);
        const sortedReadList = [...readList];

        if (sortType === 'No of pages') {
            sortedReadList.sort((a, b) => b.totalPages - a.totalPages); // Descending order
        } else if (sortType === 'Ratings') {
            sortedReadList.sort((a, b) => b.rating - a.rating); // Descending order
        }

        setReadList(sortedReadList);  // Set the sorted list
    };

    const sortOptions = ['Ratings', 'No of pages'];

    return (
        <div>
            <h3 className="my-8 text-3xl">Listed Books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {sort ? `Sort by: ${sort}` : 'Sort by'}
                </div>
                <ul tabIndex={0} className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
                    {sortOptions.map(option => (
                        <li key={option} onClick={() => handleSort(option)}>
                            <a>{option}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-2xl">Books I read: {readList.length}</h2>
                    {readList.length > 0 ? (
                        readList.map(book => <Book key={book.bookId} book={book} />)
                    ) : (
                        <p>No books found in the read list.</p>
                    )}
                </TabPanel>
                <TabPanel>
                    <h2 className="text-2xl">My wish list</h2>
                    <p>Wish list functionality is under construction.</p>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;