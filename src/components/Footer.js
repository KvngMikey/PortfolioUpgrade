import React from 'react'
import smiley from '../assets/smiley.png'


const Footer = () => {
  return (
    <section id="contact" className="p-6 scroll-mt-40">
    <div className='flex flex-col text-center items-center gap-3 text-base font-medium tracking-normal'>
        <span>Got a question, proposal or project or want to work together on something?</span>
        <span>Feel free to reach out.</span>
    </div>

    <div className='flex text-center uppercase py-6 my-12 text-4xl border-y-2 border-solid border-black dark:border-white'>
      hello -- wanna work on something, hit me up - let's collaborate
    </div>

    <div className='flex flex-col items-center gap-6 text-base font-medium mb-12'>
        <a href="mailto:contact.mikeariwaodo@gmail.com" target="_top" className='hover:text-orange-700'>contact.mikeariwaodo@gmail.com</a>
        <img className="w-10" src={smiley} alt="smiley"/>
    </div>

    <div className='gap-2 flex flex-col justify-between sm:flex-row items-center text-xs font-medium'>
        <span>© MICHAEL ARIWAODO 2022</span>
        <span className="hover:bg-orange-700 hover:text-black w-4/12 sm:w-[12%] flex flex-col items-center uppercase border border-solid border-black dark:border-white bg-stone-300 dark:bg-black py-1 px-2 rounded-full shadow-xl">
          <a href='https://twitter.com/_mykhael' target="_blank">Twitter</a>
        </span>
        <span className="hover:bg-orange-700 hover:text-black w-4/12 sm:w-[12%] flex flex-col items-center uppercase border border-solid border-black dark:border-white bg-stone-300 dark:bg-black py-1 px-2 rounded-full shadow-xl">
          <a href='https://instagram.com/dnd_mykhael' target="_blank">Instagram</a>
        </span>
        <span className="hover:bg-orange-700 hover:text-black w-4/12 sm:w-[12%] flex flex-col items-center uppercase border border-solid border-black dark:border-white bg-stone-300 dark:bg-black py-1 px-2 rounded-full shadow-xl">
          <a href='https://github.com/kvngmikey' target="_blank">Github</a>
        </span>
        <span className="hover:bg-orange-700 hover:text-black w-4/12 sm:w-[12%] flex flex-col items-center uppercase border border-solid border-black dark:border-white bg-stone-300 dark:bg-black py-1 px-2 rounded-full shadow-xl">
          <a href='https://linkedin.com/in/michael-ariwaodo-7b65521b1' target="_blank">Linkedin</a>
        </span>
        <span className=''>Designed by <a href='https://twitter.com/Evanelubah3' target="_blank" className='text-emerald-700 dark:text-sky-400'>Ebuka Elubah</a></span>
    </div>
    </section>
  )
}

export default Footer