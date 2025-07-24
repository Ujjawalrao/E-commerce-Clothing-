import React from 'react'

function Hero() {
  return (
    <>
      <section className="hero h-[100dvh] bg-black overflow-hidden w-full">
            <video src="https://cdn.shopify.com/videos/c/o/v/57c76c8da5fc4144b4088f5a7e70fbad.mp4" autoPlay muted loop
                className="hidden sm:block h-screen w-screen object-cover">
                  <img src=""/>
                </video>
            <video src="https://cdn.shopify.com/videos/c/o/v/8f0615a2e50340f596ddbe665a50946d.mp4" autoPlay muted loop
                    className="block md:hidden h-screen w-screen object-cover"></video>
      </section>
      
    </>
  )
}

export default Hero;
