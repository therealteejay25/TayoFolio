import React from 'react'

const HeroStack = ({src}:{src:string}) => {
  return (
    <div className='bg-white rounded-full shadow-lg shadow-black/50 shadowinner p-2'>
        <img className='h-5' src={src} alt="" />
    </div>
  )
}

export default HeroStack