import React from 'react'

export default function Card(props) {
  return (
      <img className='h-72 w-72 mr-1 rounded-lg'
      src={props.imgLink} alt="book cover" />

  )
}
