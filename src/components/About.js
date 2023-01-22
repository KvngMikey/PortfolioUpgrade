import React from 'react'
import deved from '../assets/image-34.png'
// import {AiFillTwitterCircle, AiFillLinkedin, AiFillMail} from 'react-icons/ai';

const About = () => {
  return (
    <section id="about" className="flex flex-col-reverse justify-center sm:flex-col p-4 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
        {/* <article className="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                Michael Ariwaodo, <span className="text-indigo-700 dark:text-indigo-300">frontend software developer</span>.
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                I'm a goal driven software developer whose interest is in using technology to build solutions to solve real world problems and passionate about building pixel perfect UI's.
            </p>
            <p className="max-w-md flex gap-6 justify-center sm:justify-start text-3xl mt-4 text-slate-700 dark:text-slate-400">
                <a
                href="https://twitter.com/_mykhael"
                target="blank"
                className=""
                >
                <AiFillTwitterCircle />
                </a>
                <a
                href="https://linkedin.com/in/michael-ariwaodo-7b65521b1"
                target="blank"
                className=""
                >
                <AiFillLinkedin />
                </a>
                <a
                href="mailto:contact.mikeariwaodo@gmail.com"
                target="blank"
                className=""
                >
               <AiFillMail />
                </a>
            </p>
        </article> 
        <img className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 " src={deved} alt="cartoon-avatar"/>    */}
       <span className="font-bebas font-medium text-[65px] sm:text-[113px] uppercase">Front ——End  Developer</span>
       <article className='flex flex-col sm:flex-row items-center gap-8'>
        <img className="bg-gradient-to-b from-teal-500 w-96 h-40" src={deved} alt="cartoon-avatar"/>
        <span className='uppercase text-xl font-semibold tracking-wider'>Michael is a goal driven software developer whose interest is in using technology to build solutions to solve real world problems and passionate about building pixel perfect UI's.</span>
       </article> 
    </section>
  )
}

export default About