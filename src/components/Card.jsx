import React from "react";

function Card({ url, name, price }) {
  return (
    <>
      <div class="bx min-w-[180px] md:min-w-[250px] lg:min-w-[380px] h-[280px] md:h-[380px] lg:h-[500px] bg-gray-20 my-8 ">
        <div class="w-full h-full flex justify-center items-center overflow-hidden">
          <img
          className="w-full"
          src={url} />
        </div>
        <div class="w-full h-[50px] bg-transparent flex justify-between items-center text-gray-900 px-2 border border-gray-300">
          <span className=" text-[9px] md:text-[16px]">{name}</span>
          <span className=" text-[9px] md:text-[16px]">{price}</span>
        </div>
      </div>
    </>
  );
}

export default Card;
