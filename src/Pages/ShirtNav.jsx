import React from 'react'
import Title from '../components/Title'
import CardTabs from '../components/CardTabs'

function ShirtNav() {

    const shirt = [ 
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/denimshirtnew1.jpg?v=1736241291&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,990.00'
          },
          {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20THNOVCHAPTER2-15892.jpg?v=1738266457&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,990.00'
          },
          {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/48.jpg?v=1732879028&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
          },
          
    ]

  return (
    <>
      <Title title='SHIRTS' />
      <div className='flex justify-center gap-6 flex-wrap px-8 pb-8'>
        {shirt.map( (s,i) =>{
            return <CardTabs url={s.url} name={s.name} price={s.price} key={i} />
        })}
      </div>
    </>
  )
}

export default ShirtNav
