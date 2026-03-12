import React from 'react'
import Pic from './images/girl.png'
import TopText from './TopText'

function Top() {
  return (
    <div className=' h-screen  w-full flex flex-col items-center gap-8 '>
      <div className='bg-purple-300 relative h-[22%] w-[50%] flex flex-col py-6 px-6 rounded-2xl mt-20 '>
        <h2 className='text-2xl font-semibold font-mono'>Hi, Alyssa</h2>
        <p className='font-mono text-[14px]  '>Ready to start your day wiht some tasks?</p>
        <img src={Pic} className='absolute h-40 w-40 -top-14 right-2 ' />
      </div>
      <TopText />
    </div>
  )
}

export default Top