import React from 'react'
import Logo from './Logo'
import Title from './Title'

function Navbar() {
  return (
    <div className=' border_bottom h-10 flex items-center px-4 py-2 gap-16 '>
      <Logo />
      <Title />
    </div>
  )
}

export default Navbar