import React from 'react'

const Skills = (props) => {
  return (
    <li className="w-52 flex flex-col items-center border border-solid border-black dark:border-white bg-stone-300 dark:bg-black py-6 px-2 rounded-full shadow-xl mr-8 my-4">
      <img src={props.img} alt="Explorer" className="w-[45%] my-6 dark:bg-white" />
      <p>{props.text}</p>
    </li>
  )
}

export default Skills