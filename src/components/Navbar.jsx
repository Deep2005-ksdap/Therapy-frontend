import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [hamActive, setHamActive] =useState(false);

  // useEffect(() => {
  //     if(hamActive){
  //       setBlock(true)
  //     }
  // })

  return (
    <nav className="flex justify-between relative items-center py-6 px-6 md:mx-4 shadow-xl">
      <div className="1 font-bold text-2xl">
        <a>Hey Therapy</a>
      </div>
      <div className="2 flex px-4 gap-4 sm:gap-10 md:gap-14">
        <a className="sm:inline hidden cursor-pointer font-bold text-gray-700 hover:text-green-600">Login</a>
        <a className="sm:inline hidden cursor-pointer font-bold text-gray-700 hover:text-green-600">Signup</a>
        <a className="sm:hidden text-2xl" onClick={() => setHamActive(!hamActive)}>
          <RxHamburgerMenu />
        </a>
      </div>
      <div className={`absolute top-16 right-4 w-[90%] z-10 rounded text-gray-400 py-2 text-center bg-gray-700 ${hamActive ? "block" : "hidden"}`}>
          <p className="mb-2"><a className="py-0.5 hover:text-gray-200 hover:cursor-pointer">Login</a></p>
          <p><a className="py-0.5 hover:cursor-pointer hover:text-gray-200">SignUP</a></p>
          
      </div>
    </nav>
  );
};

export default Navbar;
