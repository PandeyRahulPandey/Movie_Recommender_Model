import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between sticky top-0 z-50 bg-black items-center h-24 max-w-full mx-auto px-4">
      <h1>
        <a
          href="/"
          alt="Home"
          className="w-full md:text-3xl sm:text-2xl text-xl font-bold text-[#00df9a]"
        >
            FILMY
        </a>
      </h1>
      
      <ul className="hidden md:flex">
        <li className="p-4 mr-5 font-bold">
          <a href='/'>Home</a>
        </li>
      </ul>
      <div onClick={handleNav} className="cursor-pointer md:hidden block">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full md:text-3xl text-2xl font-bold text-[#00df9a] m-4">
          FILMY
        </h1>
      </div>
    </div>
  );
};

export default Navbar;