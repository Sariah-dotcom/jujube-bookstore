import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import BookDetails from './components/BookDetails.jsx';


function App() {
    return (
        <div>
           <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/:id" element={<BookDetails />} />
            </Routes>
        </Router>
      </div>
    );
}

export default App;
