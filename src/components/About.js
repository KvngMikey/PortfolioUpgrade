import React from 'react'
import deved from '../assets/about-pic.JPG'
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
       <article className='font-bebas font-medium'>
       <span className="text-9xl tracking-tight custom-style leading-[9rem] uppercase sm:hidden">Front ——— End Developer</span>
       <span className="text-[172px] lg:text-[186px] xl:text-[254px] custom-style hidden leading-[13rem] xl:leading-[16rem] sm:block">Front ——— End</span>
       <span className="text-[172px] lg:text-[186px] xl:text-[254px] custom-style hidden leading-[13rem] xl:leading-[16rem] sm:block">Developer</span>
       {/* <span className="font-bebas font-medium  uppercase">Front <br/> <span> ——— End</span> <br/> <span> Developer</span></span> */}
       </article>
       <article className='flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap items-center gap-8'>
        {/* <img className="w-full md:w-96 h-40" src={deved} alt="cartoon-avatar"/> */}
        <img className="w-full md:max-xl:w-[30rem] h-40" src={deved} alt="cartoon-avatar"/>
        {/* <span className='uppercase custom-style text-base md:text-xl leading-8 md:leading-10 font-medium tracking-wider'>Michael is a goal driven software developer whose interest is in using technology to build solutions to solve real world problems and passionate about building pixel perfect UI's. When I'm not writing code, you can find me playing chess, fifa or watching Man Utd.</span> */}
        <span className='uppercase custom-style text-base md:text-2xl leading-8 md:leading-10 font-medium tracking-wider'>Michael is a goal driven software developer whose interest is in using technology to build solutions to solve real world problems and passionate about building pixel perfect UI's.</span>
       </article> 
    </section>
  )
}

export default About