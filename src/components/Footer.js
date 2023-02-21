import React from 'react'
import { motion } from 'framer-motion'
import smiley from '../assets/smiley.png'

const Footer = () => {
  return (
    <section id="contact" className="p-6 scroll-mt-40">
      <div className='flex flex-col text-center items-center gap-3 text-base font-medium tracking-normal'>
        <span>Got a question, proposal or project or want to work together on something?</span>
        <span>Feel free to reach out.</span>
      </div>

      <div className="overflow-hidden flex text-center uppercase py-6 my-12 gap-4 text-3xl sm:text-8xl border-y-2 border-solid border-black dark:border-white">
        <motion.span
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "loop", ease: 'linear' }}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          <h1> hello —— wanna work on something, hit me up - let's collaborate </h1>
        </motion.span>
        <motion.span
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "loop", ease: 'linear' }}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          <h1> hello —— wanna work on something, hit me up - let's collaborate </h1>
        </motion.span>
      </div>

      <div className='flex flex-col items-center gap-6 text-base font-medium mb-8'>
        <a href="mailto:contact.mikeariwaodo@gmail.com" target="_top" className='hover:text-orange-700'>contact.mikeariwaodo@gmail.com</a>
        <img className="w-10" src={smiley} alt="smiley" />
      </div>

      <div className='flex flex-col justify-between sm:flex-row items-center text-xs font-medium'>
        <span>© MICHAEL ARIWAODO 2022</span>
        <div className='flex flex-row gap-4 mx-4 my-2'>
          <span className="hover:bg-orange-700 hover:text-black flex flex-col items-center uppercase border border-solid border-black dark:border-white bg-stone-300 dark:bg-black dark:hover:bg-orange-700 py-1 px-2 rounded-full shadow-xl">
            <a href='https://twitter.com/_mykhael' target="_blank">Twitter</a>
          </span>
          <span className="hover:bg-orange-700 hover:text-black flex flex-col items-center uppercase border border-solid border-black dark:border-white bg-stone-300 dark:bg-black dark:hover:bg-orange-700 py-1 px-2 rounded-full shadow-xl">
            <a href='https://instagram.com/dnd_mykhael' target="_blank">Instagram</a>
          </span>
          <span className="hover:bg-orange-700 hover:text-black flex flex-col items-center uppercase border border-solid border-black dark:border-white bg-stone-300 dark:bg-black dark:hover:bg-orange-700 py-1 px-2 rounded-full shadow-xl">
            <a href='https://github.com/kvngmikey' target="_blank">Github</a>
          </span>
          <span className="hover:bg-orange-700 hover:text-black flex flex-col items-center uppercase border border-solid border-black dark:border-white bg-stone-300 dark:bg-black dark:hover:bg-orange-700 py-1 px-2 rounded-full shadow-xl">
            <a href='https://linkedin.com/in/michael-ariwaodo-7b65521b1' target="_blank">Linkedin</a>
          </span>
        </div>
        <span className=''>Designed by <a href='https://twitter.com/Evanelubah3' target="_blank" className='text-emerald-700 dark:text-sky-400'>Ebuka Elubah</a></span>
      </div>
    </section>
  )
}

export default Footer