import React from 'react'
import SectionTitle from './SectionTitle.jsx'

export default function About() {
  return (
    <div className='p-8 mt-20 flex justify-center'>
      <div className="lg:w-5/6">
        <SectionTitle title="About" />
        <p className='font-inter text-grey p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique repudiandae optio quibusdam modi nisi velit tempora, at officia aut exercitationem, 
          soluta animi quod saepe necessitatibus ipsa numquam porro, molestiae architecto.
        </p>
      </div>
    </div>
  )
}
