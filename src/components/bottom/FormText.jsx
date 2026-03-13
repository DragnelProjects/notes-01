import React from 'react'

function FormText() {
  return (
    <div className='w[50%] flex flex-col justify-center items-center gap-3 '>
        <h2 className='text-6xl text-[#111135] font-semibold '>Organize Your Notes</h2>
        <h3 className='text-6xl text-[#111135] font-semibold'>Tasks, and <span className=' bg-linear-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent '>Project</span></h3>
        <p className='text-[14px] text-gray-400 font-semibold '>Manage everything seamiessly and bost productivity,whether working solo or collaction with teams.</p>
    </div>
  )
}

export default FormText