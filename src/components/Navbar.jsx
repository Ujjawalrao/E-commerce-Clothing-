import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import {NavLink} from 'react-router-dom'

function Navbar() {
  const [show, setResult] = useState(true);
  const [hide, setHide] = useState(false);
  const ref = useRef();

  // for sale info .
  function disable() {
    // console.log('click');
    setResult(!true);
  }
  // for tabs top scroll.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // for hide side nav .
  function Disable() {
    setHide(false);
  }
  // for show side nav .
  function enable() {
    setHide(true);
  }
// side nav hide with side click
  function clossidenav () {
      setHide(false)
  }

  return (
    <>
      {hide ? (
        <div onClick={()=>{
          clossidenav()
        }} 
        ref={ref} className="bg-black/50 backdrop-blur-[2px] fixed top-0 left-0 h-screen w-screen cursor-grab z-10" >
          <div className=" fixed top-0 left-0 h-full w-full lg:w-[350px] bg-white z-60 -translate-x-[355p]">
            <ul className="w-full px-5 py-4 font-tactic-sans-bold tracking-wide">
              <li className="flex justify-between font-bold mt-8 pb-2">
                {" "}
                MENU{" "}
                <span
                  onClick={Disable}
                  className="hover:scale-[1.3] transition-all ease-in-out cursor-pointer  hover:text-gray-600"
                >
                  X
                </span>{" "}
              </li>
              <li className=" py-4 text-[12px] tracking-tight cursor-pointer whitespace-nowrap font-medium border-x-transparent hover:backdrop-brightness-95 border border-gray-700 hover:underline">
                TINDER X CHAPTER-2
              </li>
              <li className=" py-4 text-[12px] tracking-tight cursor-pointer whitespace-nowrap font-medium border-x-transparent hover:backdrop-brightness-95 border border-gray-700 hover:underline">
                DROP 1.0 - THE WASHED PAST COLLECTION
              </li>
              <li className=" py-4 text-[12px] tracking-tight cursor-pointer whitespace-nowrap font-medium border-x-transparent hover:backdrop-brightness-95 border border-gray-700 hover:underline">
                DROP 2.0 - THE EVERY-BODY EVERAYDAY COLLECTION
              </li>
              <li className=" py-4 text-[12px] tracking-tight cursor-pointer whitespace-nowrap font-medium border-x-transparent hover:backdrop-brightness-95 border border-gray-700 hover:underline">
                DROP 1.0 - THE NOT SO BASIC COLLECTION
              </li>
              <li className=" py-4 text-[12px] tracking-tight cursor-pointer whitespace-nowrap font-medium border-x-transparent hover:backdrop-brightness-95 border border-gray-700 hover:underline">
                SHOP ALL
              </li>
              <li className=" py-4 text-[12px] tracking-tight cursor-pointer whitespace-nowrap font-medium border-x-transparent hover:backdrop-brightness-95 border border-gray-700 hover:underline">
                SHOP BY CAYEGORY
              </li>
              <li className=" py-4 text-[12px] tracking-tight cursor-pointer whitespace-nowrap font-medium border-x-transparent hover:backdrop-brightness-95 border border-gray-700 hover:underline">
                SHOP BY PACKS
              </li>
            </ul>
          </div>
        </div>
      ) : null}
      {/* full screen nav */}
      {show ? (
        <header className="hd text-center text-[10px] lg:text-[1rem] bg-black text-white w-full h-full p-1 font-thin mix-blend-difference">
          <p>
            Sale Each on 70% || Drop 2.0 Collection: T-Shirts, Pants, Hoodies
            Etc.
          </p>
          <span
            className="text-gray-300 font-thin fixed top-1 right-5 cursor-pointer"
            onClick={disable}
          >
            X
          </span>
        </header>
      ) : null}

      <nav className="flex gap-2 flex-col items-center justify-center w-full h-[12vh] p-3 lg:p-4 lg:px-10 mix-blend-luminosity sticky top-0 ">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-center gap-4 ">
            <span
              onClick={enable}
              class="cursor-pointer text-[13px lg:text-2xl"
            >
              <i class="fa-solid fa-bars-staggered"></i>
            </span>
            <NavLink
              to="/"
              onClick={() => {
                scrollToTop();
              }}
            >
              <h1 className="font-tactic-sans-bold font-bold text-[1.2rem] lg:text-3xl tracking-widest uppercase transition-all">
                Chapter2
                <sup className="font-thin text-[16px] font-serif ">&#8482;</sup>
              </h1>
            </NavLink>
          </div>

          <div>
            <ul className="flex gap-4 lg:gap-6 text-[1rem] lg:text-[1rem]">
              <li class="cursor-pointer">
                <i class="fa-solid fa-cart-shopping"></i>
              </li>
              <li class="cursor-pointer">
                <i class="fa-regular fa-heart"></i>
              </li>
              <li class="cursor-pointer">
                <i class="fa-regular fa-user"></i>
              </li>
            </ul>
          </div>
        </div>
        {/* <hr className='border w-full border-[lightGray]' /> */}
        <div className="flex items-center justify-center w-full">
          <ul className="ty flex gap-3 sm:gap-1 lg:gap-6 text-zinc-800 text-[10px] md:gap-4 md:text-[13px] font-tactic-sans-bold font-medium sm:text-[9px] lg:text-[12px] ">
            <Link to="/tshirts">
              <li className="cursor-pointer hover:text-black text-nowrap">
                T-SHIRT
              </li>
            </Link>
            <Link to="/shirts">
              <li className="cursor-pointer hover:text-black">SHIRTS</li>
            </Link>
            <Link to="/hoodies">
              <li className="cursor-pointer hover:text-black">HOODIES</li>
            </Link>
            <Link to="/bottoms">
              <li className="cursor-pointer hover:text-black">BOTTOMS</li>
            </Link>
            <Link to="/vests">
              <li className="cursor-pointer hover:text-black">VESTS</li>
            </Link>
            <Link to="/crops">
              <li className="cursor-pointer hover:text-black">CROPS</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
