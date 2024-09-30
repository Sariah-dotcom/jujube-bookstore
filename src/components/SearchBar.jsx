import { TextInput } from 'flowbite-react';
import { Button } from "flowbite-react";
import { IoSearch } from "react-icons/io5";
import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(query.trim()) {
            onSearch(query);
        }
    }

  return (
    <div className='flex justify-center p-10'>
      <form className='flex gap-2' onSubmit={handleSubmit}>
        <TextInput onChange={ (e) => setQuery(e.target.value)} value={query} placeholder='Search by book title or author' type='text' rightIcon={IoSearch}  />
        <Button gradientDuoTone='pinkToOrange'>Search</Button>
      </form>
    </div>
  )
}
