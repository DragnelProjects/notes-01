import React from 'react'
import { NotebookTabs } from 'lucide-react';

function Logo() {
  return (
    <div className='flex items-center gap-4 px-2'>
      <NotebookTabs size={16} fill='violet' color='pink' />
      <h5 className='text-indigo-900 font-medium text-[12px] '>MINO</h5>
    </div>
  )
}

export default Logo