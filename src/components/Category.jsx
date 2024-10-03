import React from 'react'
import SectionTitle from './SectionTitle'

export default function Category() {
  return (
    <div className='p-8 mt-20 flex justify-center'>
      <div className="lg:w-5/6">
        <SectionTitle title='Search by Category'/>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 lg:w-5/6">
          <button className='bg-lime-green text-white p-2 rounded-full'>#fiction</button>
          <button className='bg-lime-green text-white p-2 rounded-full'>#fantasy</button>
          <button className='bg-lime-green text-white p-2 rounded-full'>#sci-fi</button>
          <button className='bg-lime-green text-white p-2 rounded-full'>#dystopian</button>
          <button className='bg-lime-green text-white p-2 rounded-full'>#classic</button>
        </div>

      </div>
     
    </div>
  )
}
