import React from 'react'
import Logo from '../Logo'
import Items from './Items'
import Icons from './Icons'

const Footer = () => {
  return (
    <div className='bg-black p-8 flex flex-col items-center gap-4'>
      <Logo width={150} />
      <Items />
      <Icons />
      <p className='text-zinc-300 font-josefin text-sm
      '>© 2021 Loopstudios. All rights reserved.</p>
    </div>
  )
}

export default Footer
