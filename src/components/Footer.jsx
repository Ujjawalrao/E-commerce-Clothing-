import React from 'react'

function Footer() {

  const scrollToTop = () => {
    window.scrollTo( {top:0, behavior:'smooth'})
  }


  return (
    <footer className='flex justify-center items-center flex-col gap-6 p-2 border-y border-gray-200 md:max-h-[400px] w-full z-10 '>
      <p onClick={scrollToTop} className='font-bold text-[12px] cursor-pointer'>Scroll To Top ↑</p>
      <ul className='flex flex-col lg:flex-row text-center  gap-4 font-medium text-[10px] text-gray-700'>
        <li>About Us</li>
        <li>FAQs</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Payments</li>
        <li>Track Your Order</li>
        <li>Info</li>
        <li>Return and Exchange</li>
        <li>Shipping Policy</li>
        <li>Place Your Return & Exchange Request</li>
      </ul>
      <h1 className="font-tactic-sans-bold font-black text-[1.2rem] lg:text-[5rem] tracking-widest uppercase transition-all">
                Chapter2
                <sup className="font-thin lg:text-[3rem] font-serif ">
                  &#8482;
                </sup>
      </h1>
      <div className='flex gap-5 text-xl'>
      <a href="https://www.instagram.com/ujjawal_raosahab/"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://github.com/Ujjawalrao"><i class="fa-brands fa-github"></i> </a>
      </div>
      <p className='font-tactic-sans-bold text-[12px] text-gray-900'>Copyright 2024-25 © Ujjawal</p>
    </footer>
  )
}

export default Footer
