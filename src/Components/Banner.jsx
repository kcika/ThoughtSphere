import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6"
const Banner = () => {
    return (
        <div className='px-4 py-32 bg-black text-white mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-7'>Welcome to our Blog</h1>
                <p className="lg:w-3/5 mx-auto mb-5 font-inter">Discover a world of technology, creativity, and inspiration. Whether you're passionate about coding, design, or the latest tech trends, this blog is your go-to destination. From in-depth tutorials to personal insights, I share practical knowledge to help you grow, learn, and thrive in the digital world.</p>
                <p className=' font-inter mb-5'>Explore, engage, and enjoy the journey—let's dive into the world of innovation together!</p>
                <div className="">
                    <Link to='/about' className="inline-flex bg-red-500 px-4 py-3 rounded text-lg font-semibold hover:bg-white hover:text-red-500 transition-all duration-200 ease-in">Learn More <FaArrowRight className='mt-1.5 ml-2' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
