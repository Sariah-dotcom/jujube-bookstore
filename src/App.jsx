import React, { useState } from 'react';
import SearchBar from './components/SearchBar.jsx'; 
import axios from 'axios';
import Hero from './components/Hero.jsx';
import Header from './components/Header.jsx';


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
           <Header />
            <Hero />
      </div>
    );
}

export default App;
