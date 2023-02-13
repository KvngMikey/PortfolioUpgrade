import React from 'react'
import { BsFillMoonStarsFill, BsCloudSun } from 'react-icons/bs';

const Header = (props) => {
    function initApp() {
        const hamburgerBtn = document.getElementById('hamburger-button')
        const mobileMenu = document.getElementById('mobile-menu')

        function toggleMenu() {
            mobileMenu.classList.toggle('hidden')
            mobileMenu.classList.toggle('flex')
            hamburgerBtn.classList.toggle('toggle-btn')
        }

        hamburgerBtn.addEventListener('click', toggleMenu)
        mobileMenu.addEventListener('click', toggleMenu)
    }

    document.addEventListener('DOMContentLoaded', initApp)

    return (
        <header className="sticky top-0 z-10">
            <section className="max-w-[97%] lg:max-w-[85%] mx-auto py-4 px-1 lg:px-4 flex justify-between items-baseline text-sm lg:text-base xl:text-lg">
                <span className="flex items-center gap-1">
                    <span onClick={props.handleClick} className='cursor-pointer text-lg hover:text-orange-700'>
                        {props.data ? <BsFillMoonStarsFill /> : <BsCloudSun className='mb-2' />}
                    </span>
                    {/* <a href="#about"> 👨‍💻 Michael Ariwaodo </a> */}
                    <a href="#about" className='uppercase hover:opacity-90 self-baseline'> Michael Ariwaodo </a>
                </span>
                <span className="w-52 xl:w-56 hidden sm:flex cursor-default uppercase mt-3.5">
                    currently front-end developer at seech
                </span>
                <span className="w-32 xl:w-40 hidden sm:flex cursor-default uppercase">
                    based in lagos nigeria
                </span>
                <div>
                    <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer relative w-8 h-8">
                        {/* &#9776; */}
                        <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3
                before:transition-all before:duration-500 
                after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500 "></div>
                    </button>
                    <nav className="hidden md:block uppercase" aria-label="main">
                        <a href="#work" className="hover:text-orange-700">work, </a>
                        <a href="#contact" className="hover:text-orange-700">contact, </a>
                        <a href="#" className="hover:text-orange-700">Resume</a>
                    </nav>
                </div>
            </section>
            <section id="mobile-menu" className="absolute top-68 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden">
                {/* <button className="text-8xl self-end px-6">
            &times;
        </button> */}
                <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
                    <a href="#" className="w-full text-center py-6 hover:opacity-90">Home</a>
                    <a href="#rockets" className="w-full text-center py-6 hover:opacity-90">Our Rockets</a>
                    <a href="#testimonials" className="w-full text-center py-6 hover:opacity-90">Testimonials</a>
                    <a href="#contact" className="w-full text-center py-6 hover:opacity-90">Contact Us</a>
                    <a href="#footer" className="w-full text-center py-6 hover:opacity-90">Legal</a>
                </nav>
            </section>
        </header>
    )
}

export default Header