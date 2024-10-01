import React, { useState } from 'react';
import axios from 'axios';
import Hero from './components/Hero.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx'; 
import BestSellers from './components/BestSellers.jsx';
import Footer from './components/Footer.jsx';


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
            {/* <About />
            <BestSellers />
            <Footer /> */}
      </div>
    );
}

export default App;
