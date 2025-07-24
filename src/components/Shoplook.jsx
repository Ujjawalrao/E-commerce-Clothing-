import React from 'react'
import Card from './Card'

function Shoplook() {
     
    let img = [
        {
          url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/4D24E4C0-4A36-4BA2-909A-3FE06637C6CA_c1ff9db4-fa16-4d88-9900-999cbe19b23e.jpg?v=1738240523&width=720&height=1120&crop=center',
          name:'UNHERD 2.0 -INDIFFERENT 2.0',
          price:'₹2,990.00'
        },
        {
          url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/washedgreytee2_e24ca69f-4377-44d8-9556-acf073f6d09d.jpg?v=1732519896&width=720&height=1120&crop=center',
          name:'UNHERD 2.0 -INDIFFERENT 2.0',
          price:'₹2,990.00'
        },
        {
          url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/GFD2.jpg?v=1723136421&width=720&height=1120&crop=center',
          name:'UNHERD 2.0 -INDIFFERENT 2.0',
          price:'₹2,990.00'
        },
        {
          url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20THNOVCHAPTER2-16062.jpg?v=1738306756&width=720&height=1120&crop=center',
          name:'UNHERD 2.0 -INDIFFERENT 2.0',
          price:'₹2,990.00'
        },
        {
          url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/greyvest3.jpg?v=1732444564&width=720&height=1120&crop=center',
          name:'UNHERD 2.0 -INDIFFERENT 2.0',
          price:'₹2,990.00'
        },
        {
          url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/527B5D27-B766-4B7D-AF80-45B17D1A28A9.jpg?v=1738307803&width=720&height=1120&crop=center',
          name:'UNHERD 2.0 -INDIFFERENT 2.0',
          price:'₹2,990.00'
        }
        
      ];

  return (
    <div className=''>
      <div className='flex flex-col md:flex-row lg:flex-row'>
        <div className='w-[100%] md:min-w-[470px] lg:min-w-[600px]'>
            <img src="https://cdn.shopify.com/s/files/1/0656/0691/0124/collections/homepage_shop_the_look.webp?v=1723279062&width=1440&height=1800&crop=center"/>
        </div>
        <div className='overflow-control overflow-x-scroll overflow-y-hidden flex items-center gap-8 px-4' >
                {img.map( (i,idx) =>{
                    return <Card url={i.url} name={i.name} price={i.price} key={idx}/>
                })}
        </div>
      </div>
    </div>
  )
}

export default Shoplook
