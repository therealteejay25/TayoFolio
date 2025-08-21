import React from 'react'
import Logo from './Logo'
import HeroStack from './HeroStack'

const Code = () => {
  return (
    <div className='relative h-full'>
        <h3 className='text-background text-sm font-medium flex items-center justify-end gap-2 py-2'><Logo size={12} color='#fff' /> USING NEXT GEN TOOLS TO SOLVE BIG PROBLEMS.</h3>
        <div className="h-[1px] w-full mb-7 bg-background"></div>
        <p className='text-background/85 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit totam quidem eius, quod ab velit voluptas debitis, facere ipsam rerum architecto laborum fugiat repudiandae? Deleniti aspernatur eligendi consequuntur quam hic?
        Repellendus, doloribus voluptas? Dolorem rem similique earum error culpa quia maiores, quis, molestiae distinctio praesentium aliquid, saepe numquam ducimus amet? Hic error fuga autem itaque? Eaque temporibus voluptatem velit quam!
        Aperiam consequuntur itaque repellendus amet omnis unde ipsum doloribus, dolorum odit nesciunt ipsa atque aliquam quas laudantium fugit deserunt dolorem eum est. Incidunt facere aliquam quam est porro repellat veniam.</p>
        <div className="absolute z-10 right-16 -top-16">
            <HeroStack src='/node.svg' />
          </div>
        <div className="absolute z-10 left-16 -top-16">
            <HeroStack src='/react.svg' />
          </div>
        <div className="absolute z-10 right-16 -bottom-16">
            <HeroStack src='/mongo.svg' />
          </div>
        <div className="absolute z-10 left-16 -bottom-16">
            <HeroStack src='/ts.svg' />
          </div>
    </div>
  )
}

export default Code