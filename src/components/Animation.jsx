import React from 'react'

function Animation() {
  return (
    <>
     <motion.div
        animate={{
          y: -1000,
        }}
        transition={{
          duration: 2,
          delay: 1,
        }}
        className="overflow-y-hidden h-screen w-screen absolute top-0 z-70 bg-white flex justify-center items-center "
      >
        <motion.h1
          animate={{
            y: 10,
          }}
          transition={{
            transition: ellipse,
          }}
          className="font-tactic-sans-bold font-bold text-[1.2rem] lg:text-[80px] tracking-widest uppercase transition-all  text-white mix-blend-difference absolute z-80"
        >
          Chapter2
          <sup className="font-thin text-[40px] font-serif ">&#8482;</sup>{" "}
        </motion.h1>
        <motion.div
          animate={{
            y: -1000,
          }}
          transition={{
            duration: 2,
          }}
          className="bg-black h-screen w-screen "
        ></motion.div>
      </motion.div> 
    </>
  )
}

export default Animation
