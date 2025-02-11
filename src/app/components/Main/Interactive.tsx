import React from 'react'
import Image from 'next/image'
import interMobile from '../../../../public/pictures/images/mobile/image-interactive.jpg'
import interDesktop from '../../../../public/pictures/images/desktop/image-interactive.jpg'

const InteractiveImage = () => {
  return (
    <picture className='w-full'>
        <source srcSet={interMobile.src}
        media='(max-width:425px)'  />
        <Image src={interDesktop} alt='interctive iamge'
        width={654} height={448}/>
         
    </picture>
  )
}

export default InteractiveImage
