import React from 'react'
import Hero from '../components/Hero'
import Tshirts from '../components/Tshirts'
import Title from '../components/Title'
import Categories from '../components/Categories'
import BrandStory from '../components/BrandStory'
import Motion from '../components/Motion'
import Shoplook from '../components/Shoplook'

function Home() {
  return (
    <>
      <Hero />
      <Tshirts title='READY-TO-WEAR' />  
      <Title title='Categories' />
      <Categories />
      <Tshirts title='DROP 1.0' />  
      <Title title='brand story' />
      <BrandStory /> 
      <Title title='shop the look' />
      <Shoplook />
      <Title title='In Motion' />
      <Motion />

    </>
  )
}

export default Home
