import React from 'react'
import { motion } from 'framer-motion';
import { AiFillEye } from 'react-icons/ai';
import { FiLink } from "react-icons/fi";

const Works = (props) => {
  return (
    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-full sm:w-[46%] pl-5 flex flex-col border border-solid border-black dark:border-white bg-stone-300 dark:bg-black pt-4 pb-8 px-2 shadow-xl mx-4 md:mr-2 lg:mx-4 mb-6 sm:mb-8">
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