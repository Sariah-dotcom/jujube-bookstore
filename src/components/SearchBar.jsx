import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoSearch } from "react-icons/io5";
import { Button, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
 
  const [query, setQuery] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const handleSearch = async () => {
    if (!query && !author) {
      setBooks([]);
      return;
    }

    try {
      const response = await axios.get('http://localhost:5555/books/search', {
        params: {
          title: query,
          author: author
        }
      });

      setBooks(response.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error fetching books. Please try again.');
    }
  };

  // Debounce the search function
  const debouncedSearch = debounce(handleSearch, 300);

  useEffect(() => {
    debouncedSearch();
  }, [query, author]); // Trigger search

  // Function to handle book click
  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`); // Navigate to the book details page
  };

  return (
    <div className="search-container z-1">
      <div className='flex items-center'>
        
        <TextInput
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ borderRadius: '100px', paddingRight: '5rem', paddingTop: '1rem', paddingBottom: '1rem', paddingLeft:'1rem' }}
          className="w-full py-4 font-inter"
          rightIcon={IoSearch}
        />
      </div>

      {error && <p className="error">{error}</p>}

      <div className="results">
        {books.length > 0 ? (
          books.slice(0, 5).map((book) => ( // Limit results to first 5 books
            <div key={book._id} onClick={() => handleBookClick(book._id)} className='mb-3 border-b-2 border-black py-3 text-left'>
              <h3 className='font-plus font-semibold'>{book.title}</h3>
              <p className='font-inter italic text-xs'>{book.author}</p>
              <p className='font-inter text-xs'>{book.genre}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div> 
  );
}
