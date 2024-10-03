import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagramSquare,FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  function showMenu() {
    setMenuVisible(!menuVisible); // Toggle the menu's visibility
  }

  return (
    <div className='p-4 w-full h-24 drop-shadow-md bg-white z-20 fixed lg:px-16'>
      <div className="w-full h-full flex items-center justify-between">
      
      <Link to='/' aria-label="Home">
          <img src="/images/jujube-logo (1).png" alt="Logo" className="h-16 w-auto" />
      </Link>

      <div className='hidden lg:flex text-lime-green text-lg font-plus gap-10'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Shop by Category</a>
      </div>
        
      <IoIosMenu id='menu' className="h-8 w-8 text-lime-green lg:hidden" onClick={showMenu} />

        {/* Menu Items */}
        <div
          id="menu-items"
          className={`fixed top-0 left-0 h-screen w-full text-white font-plus flex flex-col items-left justify-center px-10 gap-10 bg-med-green transition-transform ${
            menuVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Close Icon */}
          <AiOutlineClose
            className="absolute top-10 right-5 h-8 w-8 text-white cursor-pointer"
            onClick={showMenu}
          />

          <div className="flex flex-col gap-5 text-2xl">
            <a href="#" className="hover:text-dark-green">Home</a>
            <a href="#" className="hover:text-dark-green">About</a>
            <a href="#" className="hover:text-dark-green">Shop by Category</a>
          </div>
          
          <div className='flex text-white gap-10 text-3xl mt-24'>
            <FaFacebook className="h-10 w-10" />
            <FaInstagramSquare className="h-10 w-10" />
            <FaYoutube className="h-10 w-10" />
          </div>
        </div>

        
      </div>
    </div>
  );
}
