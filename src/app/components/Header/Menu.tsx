import React from 'react'

const Menu = () => {
  return (
    <div className='h-full text-white '>
      <ul className='flex flex-col gap-4 h-full justify-center font-josefin uppercase text-2xl px-5 -mt-14
      '>
          <li>
              <a href="#">About</a>
          </li>
          <li>
              <a href="#">Careers</a>
          </li>
          <li>
              <a href="#">Events</a>
          </li>
          <li>
              <a href="#">Products</a>
          </li>
          <li>
              <a href="#">Support</a>
          </li>
      </ul>
    </div>
  )
}

export default Menu
