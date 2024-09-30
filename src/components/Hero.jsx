import React from 'react'
import SearchBar from './SearchBar'

export default function Hero() {
  return (
    <div className='flex'>
      <div className=' flex flex-col gap-3 py-20 px-6 mt-10'>
        <h1 className='font-poppins font-bold text-5xl z-10'>There is no friend as loyal as a book.</h1>
        <p className='text-lime-green font-bold italic font-inter mt-2'>- Ernest Hemmingway</p>
        <SearchBar />
      </div>
      <img src="/images/Ellipse 14.png" alt="blob" className='absolute right-0 -z-1' />
    </div>
  )
}
