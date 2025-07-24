import React from 'react'
import Title from '../components/Title'
import CardTabs from '../components/CardTabs'

function Vests() {

    const vests = [
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/greyvest3.jpg?v=1732444564&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/brownvest3.jpg?v=1732444475&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/blackvest1.jpg?v=1732444534&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        
    ]
  return (
    <>
      <Title title='VESTS' />
      <div className='flex justify-center gap-6 flex-wrap px-8 pb-8'>
      {vests.map( (v,i) =>{
        return <CardTabs url={v.url} name={v.name} price={v.price} key={i} />
      })}
      </div>
    </>
  )
}

export default Vests
