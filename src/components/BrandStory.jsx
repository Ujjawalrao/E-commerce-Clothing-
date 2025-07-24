import React from 'react'

function BrandStory() {
  return (
    <>
    <section className='px-5 w-full h-full'>
    <div className='bg-black flex flex-col md:flex-row justify-around font-tactic-sans-bold font-black text-gray-200 pl-4 w-[100%] '>
      <div className='flex flex-col justify-center text-wrap p  -4'>
        <h1 className='text-[35px] font-tactic-sans-bold mb-2'>Unisex Pavement <br/>
        Fashion Redefined</h1>

       <p className=' my-2 text-[13px] font-bold tracking-wide '>Step into a new era of fashion with Chapter 2,<br /> a bold fusion of metropolitan design that defies gender norms.<br />   This collection is for the trailblazers, those who aren’t afraid to write their sequel and join a cultural revolution.</p>
       <p className='my-4 text-[13px] font-bold tracking-wide'>
       More than just clothing, Chapter 2 embodies the courage to stand out, the strength to begin anew, and a style that’s uniquely yours.</p>
       <p className='font-bold tracking-wide'>Welcome to Chapter 2—Write Your Sequel.</p>

        <h1 className='text-[30px] font-tactic-sans-bold font-black mt-4'>Welcome to CHAPTER2™ <br/>
        Write Your Sequel</h1>
      </div >
      <video loop autoPlay muted className='pr-4' src="https://cdn.shopify.com/videos/c/o/v/5a2ecc8ae2ee4845a9eb3496f3cbc565.mp4"></video>
    </div>
    </section>
    </>
  )
}

export default BrandStory
