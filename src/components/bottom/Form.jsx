



function Form(props) {
   
  return (
    <div className='h-[70%] flex items-center justify-center border '>
      <form 
      className='h-[90%] w-75 flex flex-col items-center justify-center bg-purple-400 rounded-2xl py-1 gap-4'
      onSubmit={(e)=>{
        props.form(e)
      }}
      >
        <input type="text"
         placeholder='Enter Note title'
         value={props.title}
         onChange={(e)=>{
            props.setTitle(e.target.value);
         }}
         className='bg-neutral-50 w-[90%] h-10 px-2 rounded outline-none ' />
        <textarea type="text"
         placeholder='write'
         value={props.discription}
         onChange={(e)=>{
          props.setDiscription(e.target.value);
         }}
          className='bg-neutral-50 w-[90%] h-40 px-2 rounded outline-none  resize-none ' />
        <input type="submit" value="Add" className='bg-violet-600 text-neutral-50 text-[12px] font-semibold px-14 py-1 rounded-2xl ' />
      </form>
    </div>
  )
}

export default Form