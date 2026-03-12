
import { useEffect, useState } from 'react'
import Section from './components/Section'


function App() {

   const [title, setTitle] = useState('')
   const [discription, setDiscription] = useState('');
   const [task, setTask] = useState(()=>{
    const savedTask = localStorage.getItem('tasks');
    return savedTask ?
    JSON.parse(savedTask) : []
   });

   useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(task));
   }, [task]);

   const formHandler = (e)=>{
    e.preventDefault();
    
    // const copy = [...task];
    // copy.push({title,discription});
    // ? This below task method  is a shorter version of above methode  
    setTask([...task, {title, discription}]);
    setTitle('');
    setDiscription('');
    
  }

  const deleteBtn = (idx) =>{
    const copy = [...task];

    copy.splice(idx, 1);
    setTask(copy);
  }

  return (
    <div className='h-full w-full flex  '>
      <Section title={title} form={formHandler} setTitle={setTitle} discription={discription} setDiscription={setDiscription} task={task} steTask={setTask}  deleted={deleteBtn} />
    </div>
  )
}

export default App