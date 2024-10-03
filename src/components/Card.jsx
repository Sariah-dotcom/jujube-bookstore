import React from 'react'

export default function Card(props) {
  return (
      <img className='h-40 w-40 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96 mr-1 rounded-lg'
      src={props.imgLink} alt="book cover" />

  )
}
