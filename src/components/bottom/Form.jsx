import FormText from "./FormText";




function Form(props) {
   
  return (
    <div className='h-screen flex items-center  justify-around p-10 '>
      <form 
      className='h-90 w-75 flex flex-col items-center justify-around bg-linear-to-l from-[#f472b6] to-[#fdba74] rounded-2xl py-1 px-2 gap-2 bg_shadow '
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
         className='bg-neutral-50 w-full h-10 px-2 rounded outline-none ' />
        <textarea type="text"
         placeholder='write'
         value={props.discription}
         onChange={(e)=>{
          props.setDiscription(e.target.value);
         }}
          className='bg-neutral-50 w-full h-55 px-2 rounded outline-none  resize-none ' />
        <input type="submit" value="Add" className='bg-violet-600 text-neutral-50 text-[12px] font-semibold px-14 py-2 rounded-2xl active:scale-95 ' />
      </form>
      <FormText />
    </div>
  )
}

export default Form