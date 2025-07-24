import React from 'react'
import Card from './Card'


function Tshirts({title}) {

  const imgArr = [
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20THNOVCHAPTER2-16370.jpg?v=1732533572&width=360&height=560&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹2,990.00'
    },
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/whitetee3.jpg?v=1732518509&width=360&height=560&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹1,990.00'
    },
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20THNOVCHAPTER2-15528.jpg?v=1732369064&width=360&height=560&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹1,590.00'
    },
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20THNOVCHAPTER2-15806.jpg?v=1732368941&width=360&height=560&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹1,290.00'
    },
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/23rdnov2024CHAPTER20422.jpg?v=1732533819&width=360&height=560&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹1,990.00'
    },
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/4B6A976F-7009-417A-BB2A-0F86B80C78B6.jpg?v=1733211083&width=360&height=560&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹1,790.00'
    },
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/rustzoom.jpg?v=1732775520&width=360&height=560&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹1,290.00'
    }
  ];

  return (
    <>
       <section class=" py-4 bg-white  lg:h-screen w-full border">
        <div class="w-full" >

            <div class="flex justify-between w-full px-4">
                <h1 class="lg:text-[40px] font-tactic-sans-bold font-bold">{title}</h1>
                <button className='hidden lg:block'>See More <i class="fa-solid fa-arrow-right"></i> </button>
            </div>
            <hr drag class="border-1 cursor-move border-gray-900" />

        </div>

        <div class="overflow-control flex overflow-x-scroll overflow-y-hidden h-full mt-8">
          { imgArr.map( (d,k) => {
            return <Card key={k} url={d.url} name={d.name} price={d.price}/>
          } ) }
            
            </div>     
                 
    </section>
    <div className='flex items-center justify-center w-full p-4 border'>
      <h2 className='cursor-pointer'>VIEW MORE</h2>
    </div>
  
    </>
  )
}

export default Tshirts
