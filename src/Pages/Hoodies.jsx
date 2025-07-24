import React from 'react'
import Title from '../components/Title'
import CardTabs from '../components/CardTabs'

function Hoodies() {

    const hoodies = [ 
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20THNOVCHAPTER2-16062.jpg?v=1738306756&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20THNOVCHAPTER2-16052.jpg?v=1738306756&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/4D24E4C0-4A36-4BA2-909A-3FE06637C6CA_c1ff9db4-fa16-4d88-9900-999cbe19b23e.jpg?v=1738240523&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/346B0E71-7EC7-40BA-BD47-EE24C31F9B52.jpg?v=1734783985&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/B976FC31-45F2-4ACD-B107-6EC773BFAC79.jpg?v=1738240960&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/778E8EC7-4583-4CB7-B0AC-F37B46777DD1.png?v=1738306756&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/F67F9ECF-0D9C-4F1D-B17E-72CB9260CB0D.jpg?v=1738240534&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        }
    ]
  return (
    <>
      <Title title='HOODIES' />
      <div className='flex justify-center gap-6 flex-wrap px-8 pb-8' >
        {hoodies.map( (h,i) =>{
            return <CardTabs name={h.name} url={h.url} price={h.price} key={i} />
        })}
      </div>
    </>
  )
}

export default Hoodies
