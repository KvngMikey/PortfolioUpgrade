import React, { useState, useEffect } from 'react'

const Skills = (props) => {
  return (
            // <li className="w-2/3 sm:w-1/4 flex flex-col items-center border border-solid border-black dark:border-white bg-stone-300 dark:bg-black py-6 px-2 rounded-full shadow-xl mx-6 my-4">
            <li className="flex flex-col items-center border border-solid border-black dark:border-white bg-stone-300 dark:bg-black py-6 px-6 w-4/5 rounded-full shadow-xl mx-6 my-4">
                <img src={props.image} alt="Explorer" className="w-2/5 my-10" />
            </li>
  )
}

export default Skills