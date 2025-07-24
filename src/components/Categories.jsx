import React from "react";
import "./Categories.css";

function Categories() {
  const img = [
    "https://cdn.shopify.com/s/files/1/0656/0691/0124/files/Chapter_2_T-shirt_Thumbnail.jpg?v=1732433796&width=2000&crop=center",
    "https://cdn.shopify.com/s/files/1/0656/0691/0124/files/Chapter_2_Bowling_Shirts_Thumbnail.jpg?v=1732433936&width=2000&crop=center",
    "https://cdn.shopify.com/s/files/1/0656/0691/0124/files/Chapter_2_Crop_Tops_Thumbnail.jpg?v=1732433998&width=2000&height=3111&crop=center",
    "https://cdn.shopify.com/s/files/1/0656/0691/0124/files/Chapter_2_Bottomwear_Banner_V2.png?v=1732524084&width=2000&height=3111&crop=center",
    "https://cdn.shopify.com/s/files/1/0656/0691/0124/files/Chapter_2_Hoodies_Thumbnail.jpg?v=1732433969&width=2000&crop=center",
  ];

  return (
    <>
      <div id="cnt" className="cnt lg:grid  lg:h-[1500px] w-full">
        <div className="b1 hidden lg:block">
          <div className="box1 h-full w-full text-white font-bold text-2xl flex justify-center items-center bg-[url('https://cdn.shopify.com/s/files/1/0656/0691/0124/files/Chapter_2_T-shirt_Thumbnail.jpg?v=1732433796&width=2000&crop=center')]">
            T-SHIRT
          </div>
        </div>

        <div className="b2 hidden lg:block">
          <div className="box2 h-full w-full text-white font-bold text-4xl flex justify-center items-center bg-[url('https://cdn.shopify.com/s/files/1/0656/0691/0124/files/Chapter_2_Bowling_Shirts_Thumbnail.jpg?v=1732433936&width=2000&crop=center')]">
            BOWLING SHIRT
          </div>
        </div>

        <div className="b3">
          <div className="box3 h-full w-full text-white font-bold text-2xl flex justify-center items-center bg-[url('https://cdn.shopify.com/s/files/1/0656/0691/0124/files/Chapter_2_Crop_Tops_Thumbnail.jpg?v=1732433998&width=2000&height=3111&crop=center')]">
            CROPS
          </div>
        </div>
        <div className="b4 hidden lg:block">
          <div className="box4 h-full w-full text-white font-bold text-2xl flex justify-center items-center bg-[url('https://cdn.shopify.com/s/files/1/0656/0691/0124/files/Chapter_2_Bottomwear_Banner_V2.png?v=1732524084&width=2000&height=3111&crop=center')]">
            BOTTOMWARE
          </div>
        </div>
        <div className="b5 hidden lg:block">
          <div className="box5 h-full w-full text-white font-bold text-2xl flex justify-center items-center underline bg-[url('https://cdn.shopify.com/s/files/1/0656/0691/0124/files/Chapter_2_Hoodies_Thumbnail.jpg?v=1732433969&width=2000&crop=center')]">
            HOODIE
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
