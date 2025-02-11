import React from 'react'
import InteractiveImage from './Interactive'
import LeaderCard from './LeaderCard'

const Main = () => {
  return (
    <div className='px-5 py-20 md:py-24 md:px-20 lg:px-24 xl:px-36'>
      <InteractiveImage />
      <LeaderCard />
    </div>
  )
}

export default Main
