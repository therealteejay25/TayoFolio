import React from 'react'

type TagType = {
    img: string,
    stack: string,
}

const Tag = ({img, stack}: TagType) => {
  return (
    <div className='bg-white/5 gradient-hover pr-5 flex items-center gap-2 border-2 border-white/10 rounded-full p-1'>
        <div className='bg-white/10 p-[6px] rounded-full flex items-center justify-center'>
            <img className='h-5' src={img} alt={stack} />
        </div>
        <p className='text-white/75'>{stack}</p>
    </div>
  )
}

export default Tag