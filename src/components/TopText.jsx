import React from 'react'
import {RiFolder6Fill, RiCameraAi2Fill, RiFolderCloudFill } from '@remixicon/react'
function TopText() {
  return (
    <div className='w-[50%] h-[20%] flex items-center justify-around bg-[#ff00ea14] rounded-xl '>
        <div className='h-[80%] w-[30%] flex  justify-around px-1 gap-2 '>
            <RiFolder6Fill color='#fca5a5' className='mt-2' />
            <div className='w-[80%] flex flex-col gap-1 p-1 border-r-2 border-r-gray-400 ' >
                <p className='font-semibold text-gray-900 ' >Organize Tasks</p>
                <p className='text-[12px] leading-4 text-gray-600 font-semibold ' >Create and manage to-do-list easly.</p>
            </div>
        </div>
        <div className='h-[80%] w-[30%] flex  justify-around px-1 gap-2'>
            <RiCameraAi2Fill color='#c084fc' className='mt-2' />
            <div className='w-[80%] flex flex-col gap-1 p-1 border-r-2 border-r-gray-400 ' >
                <p className='font-semibold text-gray-900 ' >Capture Notes</p>
                <p className='text-[12px] leading-4 text-gray-600 font-semibold ' >Quickly important notes for day access.</p>
            </div>
        </div>
        <div className='h-[80%] w-[30%] flex  justify-around px-1 gap-2 '>
            <RiFolderCloudFill color='#6366f1' className='mt-2' />
            <div className='w-[80%] flex flex-col gap-1 p-1 ' >
                <p className='font-semibold text-gray-900 ' >Stay Synced</p>
                <p className='text-[12px] leading-4 text-gray-600 font-semibold ' >Access your notes and tasks from anywhere, anytime.</p>
            </div>
        </div>
    </div>
  )
}

export default TopText 