import React from 'react'
import InteractiveImage from './Interactive'
import LeaderCard from './LeaderCard'
import Creations from './Creations'

const Main = () => {
  return (
    <div className='px-5 py-20 md:py-24 md:px-20 lg:px-24 xl:px-36'>
      <section className='md:grid md:grid-cols-[60%_1fr] md:relative'>
        <InteractiveImage />
        <LeaderCard />
      </section>
      <section>
        <Creations />
      </section>
    </div>
  )
}

export default Main
