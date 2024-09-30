import React, { useState } from 'react';
import SearchBar from './components/SearchBar.jsx'; 
import axios from 'axios';


function App() {
    const [books, setBooks] = useState([]);

    const searchBooks = async (query) => {
      try {
          const response = await axios.get(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
          console.log(response.data.docs); // Check the response data
          setBooks(response.data.docs);
      } catch (error) {
          console.error('Error fetching books:', error);
      }
  };
  

    return (
        <div>
            <h1 className="text-center text-2xl font-bold p-6">Book Search</h1>
            <SearchBar onSearch={searchBooks} />
            <div className="p-10">
                {books.length > 0 ? (
                    <ul className='flex gap-3 flex-wrap'>
                      <h2 className='text-2xl'>{books.numFound}</h2>
                        {books.map((book) => (
                            <div className="border-2 border-grey p-8 w-64">
                            <li key={book.key}>
                                <h3 className='text-xl font-bold text-dark-green'>{book.title}</h3>
                                <p>{book.author_name?.join(', ')}</p>
                                <p>First published: {book.first_publish_year}</p>
                            </li>
                          </div>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center">No books found. Try a new search.</p>
                )}
            </div>
        </div>
    );
}

export default App;
