import React from 'react'

export default function SectionTitle(props) {
  return (
    <div>
      <h2 className='text-3xl font-plus font-bold border-l-4 border-lime-green pl-2 mb-5'>{props.title}</h2> 
    </div>
  )
}
