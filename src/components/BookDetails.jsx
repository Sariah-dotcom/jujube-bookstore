import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/books/${id}`);
        setBook(response.data);
        console.log(response.data);
      } catch (err) {
        setError('Error fetching book details.');
        console.error(err);
      }
    };

    fetchBook();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className='pt-48 flex flex-col items-center lg:flex-row lg:pt-32'>

      <div className='relative z-10 flex flex-col items-center text-center lg:w-5/6 lg:flex-row lg:text-left lg:gap-10 lg:pl-16'>
        <h1 className='mb-5 font-plus text-lime-green font-bold text-2xl lg:text-4xl lg:w-1/2'>{book.title}</h1>
        {book.coverImage ? (
          <img
            src={book.coverImage}
            alt={`${book.title} cover`}
            style={{ width: '250px', height: 'auto' }}
            className='drop-shadow-2xl lg:absolute lg:ml-72'
          />
          ) : (
          <div>
            <img src="https://via.placeholder.com/200x300?text=No+Image" style={{ width: '100px', height: 'auto' }} alt="no cover" />
            <p>No cover image available.</p>
          </div>
        )}
      </div>
    
      <div className="font-inter text-white bg-gradient-to-b from-med-green to-dark-green w-full px-10 py-16 -mt-10 flex flex-col gap-5 lg:py-10 lg:px-32">
        
        <div>
          <h2 className='font-semibold text-xl mb-1'>Author</h2>
          <p>{book.author}</p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-1'>Genre</h2>
          <p>{book.genre}</p>
        </div>
        
        <div>
          <h2 className='font-semibold text-xl mb-1'>Price</h2>
          <p>${book.price}</p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-1'>Description</h2>
          <p>{book.description}</p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-1'>Year published</h2>
          <p>{book.publishYear}</p>
        </div>
      </div>
    </div>
  );
}
