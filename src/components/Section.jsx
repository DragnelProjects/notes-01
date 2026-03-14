import React from 'react'
import Navbar from './navbar/Navbar'
import Top from './Top'
import Bottom from './bottom/Bottom'

function Section(props) {
  return (
    <div className='min-h-screen w-full bg-white flex flex-col content_font '>
        <Navbar />
        <Top />
        <Bottom title={props.title} form={props.form} setTitle={props.setTitle} discription={props.discription} setDiscription={props.setDiscription} task={props.task} steTask={props.setTask}  deleted={props.deleted} />
    </div>
  )
}

export default Section