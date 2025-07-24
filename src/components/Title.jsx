import React from 'react'

function Title({title}) {
  return (
    <div>
      <h1 id='title' className='font-tactic-sans-bold font-bold tracking-wide py-10 text-[1.2rem] lg:text-[40px] uppercase text-center'>{title}</h1>
    </div>
  )
}

export default Title;