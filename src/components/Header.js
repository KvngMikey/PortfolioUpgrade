import { React, useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { BsFillMoonStarsFill, BsCloudSun } from 'react-icons/bs';

const Header = (props) => {

    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    function handleMenuClick() {
        setShowMenu(false);
    }

    return (
        <header className="sticky top-0 z-10 bg-stone-300 dark:bg-black">
            <section className="max-w-[97%] lg:max-w-[85%] mx-auto py-4 px-1 lg:px-4 flex justify-between items-baseline text-sm relative z-10 lg:text-base xl:text-lg">
                <span className="flex items-center gap-2">
                    <span onClick={props.handleClick} className='cursor-pointer text-lg hover:text-orange-700'>
                        {props.data ? <BsFillMoonStarsFill /> : <BsCloudSun className='mb-2' />}
                    </span>
                    {/* <a href="#about"> 👨‍💻 Michael Ariwaodo </a> */}
                    <a href="#about" onClick={handleMenuClick} className='uppercase hover:opacity-90 self-baseline'> Michael Ariwaodo </a>
                </span>
                <span className="w-52 xl:w-56 hidden sm:flex cursor-default uppercase mt-3.5">
                    currently front-end developer at seech
                </span>
                <span className="w-32 xl:w-40 hidden sm:flex cursor-default uppercase">
                    based in lagos nigeria
                </span>
                <div>
                    <div id="hamburger-button" className="md:hidden relative h-8">
                        <Hamburger toggled={showMenu} toggle={toggleMenu} />
                    </div>
                    <nav className="hidden md:block uppercase" aria-label="main">
                        <a href="#work" className="hover:text-orange-700">work, </a>
                        <a href="#contact" className="hover:text-orange-700">contact, </a>
                        <a href="#" className="hover:text-orange-700">Resume</a>
                    </nav>
                </div>
            </section>
            {showMenu && (
                <section id="mobile-menu" className="absolute top-0 bg-stone-300 dark:bg-black w-full text-5xl justify-content-center">
                    <nav className="flex flex-col h-screen items-center pt-32 origin-top animate-open-menu" aria-label="mobile">
                        <a href="#work" className="w-full text-center py-6 hover:opacity-90" onClick={handleMenuClick}>Work</a>
                        <a href="#contact" className="w-full text-center py-6 hover:opacity-90" onClick={handleMenuClick}>Contact</a>
                        <a href="#" className="w-full text-center py-6 hover:opacity-90" onClick={handleMenuClick}>Resume</a>
                    </nav>
                </section>
            )}
        </header>
    )
}

export default Header