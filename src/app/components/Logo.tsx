import React from 'react'
import Image from 'next/image'
import logo from '../../../public/pictures/images/logo.svg'
const Logo = () => {
  return (
    <div>
      <a href="#">
          <Image src={logo} alt='logo image'/>
      </a>
    </div>
  )
}

export default Logo
