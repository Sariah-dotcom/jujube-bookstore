import React from 'react'

export default function SectionTitle(props) {
  return (
    <div>
      <h2 className='text-2xl  font-montserrat font-semibold border-l-4 border-lime-green pl-2 mb-5'>{props.title}</h2> 
    </div>
  )
}
