import { FooterBrand, FooterCopyright } from 'flowbite-react'
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <div>
      <footer className='flex flex-col gap-12 p-8 mt-20'>

        <div className='flex items-center gap-5'>
            <img src="/images/jujube-logo (1).png" alt="Logo" className="h-16 w-auto" />
           
            <div className='flex flex-col gap-2'>
                <h3 className='font-bold font-poppins text-sm'>Jujube Bookstore</h3>

                <div className='flex items-center gap-2'>
                    <FaLocationDot />
                    <p className='text-xs'>Paul's Avenue, Kingstown</p>
                </div>

                <div className='flex items-center gap-2'>
                    <IoCall />
                    <p className='text-xs'>(784) 455-5599</p>
                </div>
            </div>
        </div>

        <div className='flex gap-12 text-xs'>
            <div className='flex flex-col gap-2 font-inter'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Best Sellers</a>

                <div>
                    <p>Shop by Category</p>
                </div>
            </div>

            <div className='flex flex-col gap-2 font-inter'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Best Sellers</a>
            </div>
        </div>
        <div className='font-inter text-xs border-t-2 border-black pt-3 text-center'>Jujube Bookstore © {year} </div>
      </footer>
    </div>
  )
}
