import React from 'react'
import SectionTitle from './SectionTitle'
import BookCarousel from './BookCarousel'

export default function BestSellers() {
  return (
    <div className='p-8 mt-20 flex justify-center'>
      <div className="lg:w-5/6">
        <SectionTitle title="Best Sellers" />
        <div className="lg:w-1/2">
          <BookCarousel />
        </div>
      </div>
    </div>
  )
}
