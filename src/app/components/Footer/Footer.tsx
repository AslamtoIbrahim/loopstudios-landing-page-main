import React from 'react'
import Logo from '../Logo'
import Items from './Items'
import Icons from './Icons'

const Footer = () => {
  return (
    <div className='bg-black p-8 px-5 py-6 md:py-16 md:px-20 lg:px-24 xl:px-36
     md:flex md:justify-between '>
      <section className='flex flex-col items-center gap-4 md:items-start'>
          <Logo width={150} />
          <Items styles='md:-ml-4' />
      </section>
      <section className='flex flex-col items-center md:items-end gap-4 mt-4'>
          <Icons />
          <p className='text-zinc-300 font-josefin text-sm xl:text-xl
          '>© 2021 Loopstudios. All rights reserved.</p>
      </section>
    </div>
  )
}

export default Footer
