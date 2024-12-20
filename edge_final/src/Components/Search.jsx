import React, { useEffect, useState } from "react";
import { FaBook, FaStar, FaCheckCircle } from "react-icons/fa";

const LibraryTable = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    try {
      const response = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setBooks(data.docs.slice(0, 10)); // Limit to the top 10 results
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-semibold text-red-600">
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">📚 Library Catalog</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse rounded-lg border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border-b px-6 py-4 text-left font-semibold uppercase text-gray-600">
                <FaBook className="mr-2 inline-block text-blue-500" /> Title
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold uppercase text-gray-600">
                <FaStar className="mr-2 inline-block text-yellow-500" /> Edition Count
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold uppercase text-gray-600">
                Category
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold uppercase text-gray-600">
                Availability
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold uppercase text-gray-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr
                key={index}
                className="transition duration-150 hover:bg-gray-50"
              >
                {/* Title */}
                <td className="border-b px-6 py-4">
                  <span className="font-medium text-gray-800">{book.title || "N/A"}</span>
                </td>

                {/* Edition Count */}
                <td className="border-b px-6 py-4">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <FaStar />
                    <span>{book.edition_count || "N/A"}</span>
                  </div>
                </td>

                {/* Category */}
                <td className="border-b px-6 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    {book.subject ? book.subject[0] : "N/A"}
                  </span>
                </td>

                {/* Availability */}
                <td className="border-b px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-green-500">
                      <FaCheckCircle className="mr-1 inline-block" /> Hard Copy
                    </span>
                    <span className="font-semibold text-green-500">
                      <FaCheckCircle className="mr-1 inline-block" /> E-Book
                    </span>
                  </div>
                </td>

                {/* Status */}
                <td className="border-b px-6 py-4">
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    In-Shelf
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibraryTable;