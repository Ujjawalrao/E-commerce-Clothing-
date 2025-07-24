import React from 'react'
import Title from '../components/Title'
import CardTabs from '../components/CardTabs'

function Crops() {

    const crops = [
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/AD8C4AC4-4961-4014-9B07-C36D94FB68A4.jpg?v=1738305206&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/blackcrop3.jpg?v=1732447061&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/24th_jan_2025_chapter_22664.jpg?v=1738001948&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/8FD40947-3AB0-454B-A103-9171D00DC6FB.jpg?v=1738307875&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/DB782C91-1990-4D39-BD9D-FDAF86F22E55.jpg?v=1738160691&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/377A7058-F365-4EF7-A795-29CD6A726CFE.jpg?v=1738160738&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/AA56D081-AABA-441E-9C55-6E5A04A1063A.jpg?v=1738161043&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/E8AB7AE5-D338-4F3E-B77F-0A09CBCAF44D.jpg?v=1738160806&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/5F524AED-1F51-4627-BAE5-039EF94C71F3.jpg?v=1727351191&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20THNOVCHAPTER2-16291.jpg?v=1732367658&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
        },
    ]
  return (
    <>
      <Title title='CROPS' />
      <div className='flex justify-center gap-6 flex-wrap px-8 pb-8' >
        {crops.map( (c,i) =>{
            return <CardTabs name={c.name} price={c.price} url={c.url} key={i} />
        })}
      </div>
    </>
  )
}

export default Crops
