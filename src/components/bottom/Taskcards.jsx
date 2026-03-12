
import { RiDeleteBin3Fill } from '@remixicon/react'

function Taskcards(props) {

  return (
    <div className='min-h-[30%] w-full flex flex-wrap  gap-6 py-4 px-6 '>
      {props.task.map((elem, idx)=>{
        return <div key={idx}
                  className='bg-pink-300 h-60  w-50 flex flex-col justify-around rounded-xl pt-2 pb-5 px-3    '>
                  <p className='bg-pink-100 rounded text-[12px] py-1 px-2 font-medium text-mist-700 '>{elem.title}</p>
                  <p className='bg-pink-100 h-[50%] rounded text-[12px] py-1 px-2 font-medium text-mist-700'>{elem.discription}</p>
                  <button 
                  className='bg-violet-600 w-[50%] flex items-center justify-center text-[12px] text-neutral-300 font-semibold py-1.5 rounded gap-2 '
                  onClick={props.deleted}
                  > < RiDeleteBin3Fill size={16} />Delete</button>
      </div>
      })}
      
    </div>
  )
}

export default Taskcards