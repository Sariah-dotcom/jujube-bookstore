import React, { useState } from 'react';
import axios from 'axios';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Make a GET request to the backend search endpoint
      const response = await axios.get('http://localhost:5555/books/search', {
        params: {
          title: query,
          author: author
        }
      });

      // Set the search results in state
      setBooks(response.data);
      setError(''); // Clear any previous error
    } catch (err) {
      console.error(err);
      setError('Error fetching books. Please try again.');
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="results">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book._id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.genre}</p>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}
