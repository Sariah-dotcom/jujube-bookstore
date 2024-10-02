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
    <div className='pt-48 flex flex-col items-center'>
      <h1 className='mb-5 font-montserrat text-lime-green font-bold text-2xl lg:text-4xl mb-12'>{book.title}</h1>

        <div className='cover-container relative z-10'>
            {book.coverImage ? (
                <img
                src={book.coverImage || 'https://via.placeholder.com/200x300?text=No+Image'}
                alt={`${book.title} cover`}
                style={{ width: '200px', height: 'auto' }}
                />
            ) : (
                <p>No cover image available.</p>
            )}
        </div>
    
        <div className="font-inter text-white bg-med-green w-full px-10 py-16 -mt-10 flex flex-col gap-5 lg:p-36">
            <div>
                <h2 className='font-semibold text-xl mb-1'>Price</h2>
                <p>${book.price}</p>
            </div>

            <div>
                <h2 className='font-semibold text-xl mb-1'>Author</h2>
                <p>{book.author}</p>
            </div>

            <div>
                <h2 className='font-semibold text-xl mb-1'>Genre</h2>
                <p>{book.genre}</p>
            </div>

            <div>
                <h2 className='font-semibold text-xl mb-1'>Year published</h2>
                <p>{book.publishYear}</p>
            </div>
        </div>
    </div>
  );
}
