import React, { useEffect, useState } from "react";

const Library = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const response = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
      const data = await response.json();
      setBooks(data.docs.slice(0, 10)); // Fetch the first 10 results
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  return (
    <div className="container mx-auto px-4 py-6 pl-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse rounded-lg border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border-b px-4 py-3 text-left font-medium text-gray-600">Title</th>
              <th className="border-b px-4 py-3 text-left font-medium text-gray-600">Author</th>
              <th className="border-b px-4 py-3 text-left font-medium text-gray-600">First Publish Year</th>
              <th className="border-b px-4 py-3 text-left font-medium text-gray-600">Language</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr
                key={index}
                className="transition duration-150 hover:bg-gray-50"
              >
                <td className="border-b px-4 py-3">{book.title || "N/A"}</td>
                <td className="border-b px-4 py-3">
                  {book.author_name ? book.author_name.join(", ") : "N/A"}
                </td>
                <td className="border-b px-4 py-3">
                  {book.first_publish_year || "N/A"}
                </td>
                <td className="border-b px-4 py-3">
                  {book.language ? book.language.join(", ") : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Library;