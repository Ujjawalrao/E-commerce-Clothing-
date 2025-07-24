import React from "react";

function CardTabs({url,name,price}) {
  return (
    <>
      <div class="bx w-[280px] min-w-[300px] h-[450px]  ">
        <div class=" h-[400px] flex justify-center items-center overflow-hidden">
          <img src={url} />
        </div>
        <div class="w-full h-[50px] flex flex-col justify-between items-center px-2 border border-gray-300">
          <span className="">{name}</span>
          <span>{price}</span>
        </div>
      </div>
    </>
  );
}

export default CardTabs;
