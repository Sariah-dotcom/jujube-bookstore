import React from 'react'

export default function BookDisplay() {
  return (
    <div className='overflow-x-hidden flex justify-center'>
      <div className='flex gap-1'>
        <img className='h-48 w-36 rounded-lg' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMGYrm6h2r4pdxpjCsd__olsJssmQeSRa72ljBSayECUibzlUK" alt="" />
        <img className='h-48 w-36 mt-5 rounded-lg' src="https://m.media-amazon.com/images/I/818l7Ujz5-L._AC_UF1000,1000_QL80_.jpg" alt="" />
        <img className='h-48 w-36 rounded-lg' src="https://m.media-amazon.com/images/I/71mbJoazlCL._AC_UF1000,1000_QL80_.jpg" alt="" />
      </div>
    </div>
  )
}
