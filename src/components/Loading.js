import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Loading = (props) => {
    const [gainAccess, setGainAccess] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setGainAccess(true)
        }, 5000)
    })
    return (
        <div className="loading min-h-screen bg-stone-300 dark:bg-black dark:text-white flex items-center justify-center flex-col">
            <div className="spinner"></div>
            <p>Hey YOU,</p>
            <br />
            {!gainAccess ? (
                <>
                    <p>Just a few seconds...</p>
                    <br />
                    <motion.div
                        animate={{
                            rotate: 360,
                            borderRadius: ["50% 50%", "2% 50%"],
                            x: 75
                        }}
                        initial={{
                            x: -75
                        }}
                        transition={{
                            flip: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        style={{
                            height: "50px",
                            background: "#E81B63",
                            width: "50px",
                            borderRadius: "2% 50%",
                        }}
                    >
                    </motion.div>
                </>

            ) : (
                <>
                    <p>Check out what I have ready for you :)</p>
                    <br />
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-xl hover:from-pink-500 hover:to-yellow-500 hover:text-black' onClick={props.handleClick}>
                        Take A Look
                    </motion.button>
                </>
            )}
            <br />

        </div>
    )
}

export default Loading