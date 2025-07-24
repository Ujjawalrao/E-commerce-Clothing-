import React from 'react'
import Title from '../components/Title'
import CardTabs from '../components/CardTabs'

function Bottom() {

    const bottoms = [
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/46074BBA-7DA6-4AAA-B26C-F4770686B16C.jpg?v=1736416644&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
          },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20TH_NOV_CHAPTER_2-16095.jpg?v=1734078331&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
          },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20TH_NOV_CHAPTER_2-16088.jpg?v=1734593431&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
          },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/58F1A06E-769E-499F-B435-12C80179DC62.jpg?v=1734783985&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
          },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/B5C0141D-D49E-43C3-A426-72D814E6461B.jpg?v=1741344104&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
          },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/7233848B-94BF-417D-8236-323FA3D2288F.jpg?v=1734776313&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
          },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/20THNOVCHAPTER2-16227.jpg?v=1732369056&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
          },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/2A504746-735B-4C05-8E2D-A63CDF574085.png?v=1738310360&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
          },
        {
            url:'https://cdn.shopify.com/s/files/1/0656/0691/0124/files/BP5.jpg?v=1723127172&width=720&height=1120&crop=center',
            name:'UNHERD 2.0 -INDIFFERENT 2.0',
            price:'₹1,590.00'
          },
    ]


  return (
    <>
      <Title title='Bottoms' />
      <p className='text-zinc-600 text-[13px] font-tactic-sans-bold font-medium pl-4 mb-8'>Browse a versatile collection of bottoms for men and women. Designed for comfort and style,<br /> these bottoms are perfect for every casual outing. Shop now!</p>
      <div className='flex justify-center gap-6 flex-wrap px-8 pb-8'>
        {bottoms.map( (b,i) =>{
            return <CardTabs url={b.url} name={b.name}  price={b.price} key={i} />
        })}
      </div>
    </>
  )
}

export default Bottom
