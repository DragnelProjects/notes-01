
import { RiDeleteBin3Fill } from '@remixicon/react'

function Taskcards(props) {

  return (
    <div className='min-h-[30%] w-full flex  flex-col  gap-4 py-4 px-6 '>
      <h2 className='text-4xl font-semibold text-[#0b0b31] py-1 w-full border-b border-gray-400 '>Your Notes</h2>
      <div className='w-full '>
        {props.task.length === 0 ? 
            <div className='w-full flex items-center justify-center mt-5 '>
              <h2 className='text-2xl font-semibold text-gray-500'>No works is pending....</h2>
              <img src="https://i.pinimg.com/1200x/da/84/24/da84245bea3bf1e78383a398c05d07ba.jpg" className='h-60 w-60 object-cover ' />
            </div> : <div className='w-full flex flex-wrap p-4 gap-6'>
              {props.task.map((elem, idx)=>{
              return <div key={idx}
                  className='bg-linear-to-br from-[#ffa6a6] via-[#ff8e9b] to-[#ff62b8] h-60  w-50 flex flex-col justify-around rounded-xl pt-2 pb-5 px-3 bg_shadow '>
                  <p className='bg-pink-100 h-8 rounded text-[12px] py-1 px-2 font-medium text-mist-700 '>{elem.title}</p>
                  <p className='bg-pink-100 h-[50%] rounded text-[12px] py-1 px-2 font-medium text-mist-700'>{elem.discription}</p>
                  <button 
                  className='bg-violet-600 w-[50%] flex items-center justify-center text-[12px] text-neutral-300 font-semibold py-1.5 rounded gap-2 active:scale-95 '
                  onClick={props.deleted}
                  > < RiDeleteBin3Fill size={16} />Delete</button>
                  </div>
              })}
          </div>
        }
      </div>
      
    </div>
  )
}

export default Taskcards