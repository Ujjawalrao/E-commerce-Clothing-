import React from "react";
import { motion } from 'framer-motion';
import { ellipse } from "framer-motion/m";

function Motion() {
  return (
    <div ssName=" lg:werflow-x-hidden">
      <div className="flex gap-4 lg:gap-8 items-center justify-center mt-10 mb-24 ">
        <motion.div className=""
          initial={{
            opacity:0,
            scale:0.5

          }}
          whileInView={{
            opacity:1,
            scale:1
          }}
          transition={{
            transition:ellipse,
            duration:.8
          }}
        >
        <video
          className="rounded-lg w-[90px] md:w-[180px] lg:w-[280px]"
          loop
          muted
          autoPlay
          src="https://cdn.shopify.com/s/files/1/0656/0691/0124/files/reelUp_e4v5ropakb71721654343321_low.mp4?v=1721654376"
        ></video>
        </motion.div>
        <video
          className="rounded-lg w-[90px] md:w-[180px] lg:w-[280px]"
          loop
          muted
          autoPlay
          src="https://cdn.shopify.com/s/files/1/0656/0691/0124/files/reelUp_lzakcncwlbl1721654343321_low.mp4?v=1721654390"
        ></video>
        <motion.div className=""
          initial={{
            opacity:0,
            scale:0.5

          }}
          whileInView={{
            opacity:1,
            scale:1
          }}
          transition={{
            transition:ellipse,
            duration:.8
          }}
          >
        <video
          className="rounded-lg w-[90px] md:w-[180px] lg:w-[280px]"
          loop
          muted
          autoPlay
          src="https://cdn.shopify.com/s/files/1/0656/0691/0124/files/reelUp_9cc7h7merms1721654343320_low.mp4?v=1721654383"
        ></video>
        </motion.div>
      </div>
    </div>
  );
}

export default Motion;
