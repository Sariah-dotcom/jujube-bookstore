import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextInput } from 'flowbite-react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

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
  }, [query, author]); // Trigger search whenever query or author changes

  return (
    <div className="search-container z-1">
      <div className='flex items-center'>
        <TextInput
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ borderRadius: '100px', paddingRight: '5rem', paddingTop: '1rem', paddingBottom: '1rem' }}
          className="w-full py-4 font-inter"
        />

        <div className='absolute right-8'>
              <Button pill className='bg-med-green font-inter z-10' >Search</Button>

            </div>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="results">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book._id} className='mb-3 border-b-2 border-black py-3'>
              <h3 className='font-poppins font-semibold'>{book.title}</h3>
              <p className='font-inter italic text-xs mb-2'>{book.author}</p>
              <p className='font-inter text-xs'>{book.genre}</p>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div> 
  );
}
