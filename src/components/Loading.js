import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
    return (
        <div className="loading min-h-screen bg-stone-300 dark:bg-black dark:text-white flex items-center justify-center flex-col">
            <div className="spinner"></div>
            <p>Hello World,</p>
            <br />
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
        </div>
    )
}

export default Loading