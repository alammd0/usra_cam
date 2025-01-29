import React from 'react'

const DSLRCollection = ({position, url, intro, heading, desc}) => {
  return (
    <div className={`flex ${position} flex-col gap-20 bg-[#232225]`}>
        <div className='lg:w-[50%] pt-10'>
            <img src={url} alt='no' />
        </div>
        <div className='lg:w-[50%] flex flex-col items-start pl-14 justify-center
         gap-6'>
            <p className='text-xl font-semibold text-white'>---{intro}</p>
            <h2 className='text-5xl font-bold text-white' >{heading}</h2>
            <p className='text-[16px] text-white'>{desc}</p>
        </div>
    </div>
  )
}

export default DSLRCollection