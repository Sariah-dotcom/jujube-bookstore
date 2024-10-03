import { Button, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import axios from 'axios';
import SectionTitle from './SectionTitle.jsx';

export default function AddBook() {
  // State for form inputs
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the book object with form data
    const newBook = {
      title,
      author,
      genre,
      publishYear,
      price,
      description,
      coverImage
    };

    try {
      // Send POST request to backend to save the book
      const response = await axios.post('http://localhost:5555/books', newBook);
      console.log('Book added:', response.data);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-24 lg:flex-row lg:justify-between lg:items-center">
        <img src="/images/book-decor.png" alt="" className='hidden lg:inline lg:w-72 lg:h-96 lg:ml-24'/>
        <form onSubmit={handleSubmit} className='p-8 flex flex-col gap-6 lg:w-1/2'>
          <SectionTitle title='Add book' />

          <div>
            <h3 className='font-plus font-bold mb-2'>Book Title:</h3>
            <TextInput 
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <h3 className='font-plus font-bold mb-2'>Author Name:</h3>
            <TextInput 
              placeholder='First and Last Name'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div>
            <h3 className='font-plus font-bold mb-2'>Genre:</h3>
            <TextInput 
              placeholder='Fantasy'
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>

          <div>
            <h3 className='font-plus font-bold mb-2'>Year Published:</h3>
            <TextInput 
              placeholder='2018'
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
            />
          </div>

          <div>
            <h3 className='font-plus font-bold mb-2'>Price:</h3>
            <TextInput 
              placeholder='25.00'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <h3 className='font-plus font-bold mb-2'>Description:</h3>
            <TextInput 
              placeholder='Brief description about the plot'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <h3 className='font-plus font-bold mb-2'>Cover Image URL:</h3>
            <TextInput 
              placeholder='https://example.com/book-cover'
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />
          </div>

          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  );
}
