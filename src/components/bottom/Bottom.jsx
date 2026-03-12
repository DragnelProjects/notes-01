
import Form from './Form'
import Taskcards from './Taskcards'

function Bottom(props) {


  return (
    <div className=' min-h-screen w-full flex flex-col py-10 '>
        <Form title={props.title} form={props.form} setTitle={props.setTitle} discription={props.discription} setDiscription={props.setDiscription}   />
        <Taskcards task={props.task} steTask={props.setTask}  deleted={props.deleted} />
    </div>
  )
}

export default Bottom