import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null);
 
    const data = [
        {
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, eos?",
            filesize : ".9mb",
            isClose : true,
            tag : {isOpen : true, tagTitle : "Download now", tagColor : "green"}
        },
        {
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, eos?",
            filesize : ".9mb",
            isClose : false,
            tag : {isOpen : true, tagTitle : "Upload", tagColor : "blue"}
        },
        {
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, eos?",
            filesize : ".9mb",
            isClose : true,
            tag : {isOpen : false, tagTitle : "Download now", tagColor : "green"}
        }
        
    ]

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full p-5 flex gap-10 flex-wrap'>
       {data.map((item,index) => (
        <Card data = {item} reference = {ref} />
       ))}
    </div>
  )
}

export default Foreground
