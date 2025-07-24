import React from 'react'
import Title from '../components/Title'
import CardTabs from '../components/CardTabs'
import Motion from '../components/Motion'

function TshirtNav() {

  const tImage = [
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/23rdnov2024CHAPTER20422.jpg?v=1732533819&width=360&height=560&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹1,990.00'
    },
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/EBA8757D-A60D-4ED2-B896-6D74FCDA72DD.jpg?v=1733732578&width=720&height=1120&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹1,990.00'
    },
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20TH_NOV_CHAPTER_2-15859.jpg?v=1732518875&width=720&height=1120&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹1,590.00'
    },
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/4B6A976F-7009-417A-BB2A-0F86B80C78B6.jpg?v=1733211083&width=360&height=560&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹1,790.00'
    },
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20THNOVCHAPTER2-16370.jpg?v=1732533572&width=360&height=560&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹2,990.00'
    },
    {
      url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/rustzoom.jpg?v=1732775520&width=360&height=560&crop=center',
      name:'UNHERD 2.0 -INDIFFERENT 2.0',
      price:'₹1,290.00'
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
    }

  ]


  return (
    <>
    
      <Title title='T-Shirts – Style Meets Comfort' />
      <div className='flex justify-center gap-6 flex-wrap px-8 pb-8' >
        {tImage.map( (i,idx) => {
          return <CardTabs name={i.name} price={i.price} url={i.url} key={idx} />
        } )}
      </div>
    </>
  )
}

export default TshirtNav
