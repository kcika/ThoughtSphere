import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaXmark } from "react-icons/fa6";
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            <header className='bg-black py-3 text-white fixed top-0 right-0 left-0 z-10'>
                <nav className='max-w-screen-2xl mx-auto px-4 flex items-center justify-between'>
                    <Link to="" className='text-2xl font-semibold text-red-600'>ThoughtSpehere</Link>
                    <ul className='md:flex hidden'>
                        <li>
                            <NavLink to="" className={({ isActive }) => `text-lg font-semibold ${isActive ? "text-red-500" : "text-white"} px-4 inline-block py-3 hover:text-red-500 transition-all duration-200 ease-in`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => `text-lg font-semibold ${isActive ? "text-red-500" : "text-white"} px-4 inline-block py-3 hover:text-red-500 transition-all duration-200 ease-in`}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogs" className={({ isActive }) => `text-lg font-semibold ${isActive ? "text-red-500" : "text-white"} px-4 inline-block py-3 hover:text-red-500 transition-all duration-200 ease-in`}>Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => `text-lg font-semibold ${isActive ? "text-red-500" : "text-white"} px-4 inline-block py-3 hover:text-red-500 transition-all duration-200 ease-in`}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faqs" className={({ isActive }) => `text-lg font-semibold ${isActive ? "text-red-500" : "text-white"} px-4 inline-block py-3 hover:text-red-500 transition-all duration-200 ease-in`}>FAQs</NavLink>
                        </li>
                    </ul>
                    <div className='lg:flex hidden'>
                        <Link to="/login" className="bg-red-500 text-white px-6 py-2 text-lg font-medium rounded hover:bg-white hover:text-red-500 transition-all duration-200 ease-in">Log in</Link>
                    </div>
                    {/* mobile menu button*/}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='cursor:pointer'>
                            {
                                isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                            }
                        </button>
                    </div>
                </nav>
                {/* menu for small screen */}
                <ul className={`md:hidden gap-12 text-lg block px-4 mt-14 text-red-500 bg-black z-10 ${isMenuOpen ? "fixed top-0 right-0 left-0 w-full transition-all duration-200 ease-in" : "hidden"}`}>
                    <li>
                        <NavLink to="/home" onClick={toggleMenu} className={({ isActive }) => `font-semibold ${isActive ? "text-red-500" : "text-white"} px-4 inline-block py-3`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => `font-semibold ${isActive ? "text-red-500" : "text-white"} px-4 inline-block py-3`}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" onClick={toggleMenu} className={({ isActive }) => `font-semibold ${isActive ? "text-red-500" : "text-white"} px-4 inline-block py-3`}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" onClick={toggleMenu} className={({ isActive }) => `font-semibold ${isActive ? "text-red-500" : "text-white"} px-4 inline-block py-3`}>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => `font-semibold ${isActive ? "text-red-500" : "text-white"} px-4 inline-block py-3`}>Contact</NavLink>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar
