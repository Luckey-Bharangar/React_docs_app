import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
    <motion.div 
       drag 
       dragConstraints={reference} 
       whileDrag={{scale: "1.2"}} 
       dragTransition={{bounceStiffness: 600, bounceDamping : 10}}
       className='relative flex-shrink-0 w-56 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
      <div className='footer absolute bottom-0 left-0 w-full'>
        <div className='flex items-center justify-between py-3 px-8 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='flex bg-zinc-800 w-7 h-7 justify-center items-center rounded-full'> 
               {data.isClose ? <LuDownload size=".7em" color='#fff' /> : <IoClose />}  
            </span>
            
        </div>
          {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>
          )}
        
      </div>
    </motion.div>
  )
}

export default Card
