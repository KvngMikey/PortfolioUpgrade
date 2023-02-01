import React from 'react'
import { motion } from 'framer-motion';
import {AiFillEye} from 'react-icons/ai';
import { FiLink } from "react-icons/fi";

const Works = (props) => {
  return (
    <motion.li className="w-full sm:w-[46%] pl-4 flex flex-col border border-solid border-black dark:border-white bg-stone-300 dark:bg-black py-4 px-2 shadow-xl mx-4 mb-4"
    whileHover={{ scale: [null, 0.6, 1.1] }}
      transition={{ duration: 1 }}>
    <span className='tracking-wide mb-1.5 text-lg sm:text-xl capitalize font-medium'>{props.name}</span>
    <span className='tracking-tight text-xs uppercase font-medium'>{props.stack}</span>
    <span className='my-8 tracking-tight text-base font-medium'>{props.description}</span>
    <div className='flex gap-6'>
      <div className='flex gap-2 items-center text-sm'>
        <AiFillEye />
        <a href={props.live} target="_blank">Live</a>
      </div> 
      <div className='flex gap-2 items-center text-sm'>
        <FiLink />
        <a href={props.code} target="_blank">Code</a>
      </div>
    </div>
    </motion.li>
  )
}

export default Works