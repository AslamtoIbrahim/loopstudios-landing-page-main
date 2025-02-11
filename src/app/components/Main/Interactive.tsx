import React from 'react'
import Image from 'next/image'
import interMobile from '../../../../public/pictures/images/mobile/image-interactive.jpg'
import interDesktop from '../../../../public/pictures/images/desktop/image-interactive.jpg'

const InteractiveImage = () => {
  return (
    <picture className='w-full h-auto'>
        <source srcSet={interDesktop.src}
        media='(min-width:425px)'  />
        <Image src={interMobile} alt='interctive iamge'
        height={448} width={654} className='object-contain w-full h-auto'/>
         
    </picture>
  )
}

export default InteractiveImage
