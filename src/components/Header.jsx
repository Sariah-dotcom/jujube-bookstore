import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagramSquare,FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  function showMenu() {
    setMenuVisible(!menuVisible); // Toggle the menu's visibility
  }

  return (
    <div className='p-4 w-full h-24 drop-shadow-md bg-white z-20 fixed'>
      <div className="w-full h-full flex items-center justify-between">
        <img src="/images/jujube-logo (1).png" alt="Logo" className="h-16 w-auto" />
        <IoIosMenu id='menu' className="h-8 w-8 text-lime-green" onClick={showMenu} />

        {/* Menu Items */}
        <div
          id="menu-items"
          className={`fixed top-0 left-0 h-screen w-full text-white flex flex-col items-left justify-center px-10 gap-10 bg-med-green transition-transform ${
            menuVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Close Icon */}
          <AiOutlineClose
            className="absolute top-10 right-5 h-8 w-8 text-white cursor-pointer"
            onClick={showMenu}
          />
          
          <a href="#" className="text-2xl">Home</a>
          <a href="#" className="text-2xl">About</a>
          <a href="#" className="text-2xl">Shop by Category</a>
          
          <div className='flex text-white gap-5 text-3xl mt-24'>
            <FaFacebook />
            <FaInstagramSquare />
            <FaYoutube />
          </div>
        </div>

        
      </div>
    </div>
  );
}
