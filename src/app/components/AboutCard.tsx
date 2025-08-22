import React from 'react'

const AboutCard = ({title, content}: {title:string, content:string}) => {
  return (
    <div className='h-[22rem] w-[20rem] overflow-hidden relative bg-black/3 rounded-3xl border-4 flex flex-col items-center justify-center border-white'>
        <div className='flex flex-col z-10 hover:scale-105 cursor-pointer transition gap-5 justify-center items-center px-7'>
            <img src='star-border.svg' className='h-10' />
            <h2 className='text-3xl text-black text-center'>{title}</h2>
            <p className='text-lg text-black/50 text-center'>{content}</p>
        </div>
        <div className="absolute w-16 h-16 bg-black/50 blur-3xl"></div>
        <div className="absolute w-16 h-16 top-0 right-0 bg-black/50 blur-3xl"></div>
        <div className="absolute w-16 h-16 bottom-0  bg-black/50 blur-3xl"></div>
        <div className="absolute w-16 h-16 bottom-0 right-0 bg-black/50 blur-3xl"></div>
        <div className="absolute rounded-full h-32 w-36 -bottom-8 left-0 bg-gradientone/50 blur-2xl" />
      <div className="absolute rounded-full h-32 w-36 -bottom-8 bg-gradienttwo/50 blur-2xl" />
      <div className="absolute rounded-full h-32 w-36 -bottom-8 right-0 bg-gradientthree/50 blur-2xl" />
    </div>
  )
}

export default AboutCard