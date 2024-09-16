import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaMailchimp, FaPhone, FaTwitter } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <div className=''>
            <footer class="bg-black text-white py-16">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        <div>
                            <h3 class="text-xl font-semibold mb-4">About Us</h3>
                            <p class="text-gray-400">
                                We are a platform dedicated to celebrating diverse voices and stories, fostering genuine engagement and meaningful conversations.
                            </p>
                        </div>

                        <div className='flex'>
                            <div className='w-1/3'>
                                <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
                                <ul>
                                    <li className='mb-2'><NavLink to="/home" class="text-lg font-medium text-gray-400 hover:text-red-500">Home</NavLink></li>
                                    <li className='mb-2'><NavLink to="/about" class="text-lg font-medium text-gray-400 hover:text-red-500">About</NavLink></li>
                                    <li className='mb-2'><NavLink to="/blog" class="text-lg font-medium text-gray-400 hover:text-red-500">Blog</NavLink></li>
                                    <li className='mb-2'><NavLink to="/contact" class="text-lg font-medium text-gray-400 hover:text-red-500">Contact</NavLink></li>
                                </ul>
                            </div>
                            <div className='w-2/3'>
                                <h3 class="text-xl font-semibold mb-4">Get in Touch</h3>

                                <ul>
                                    <li className='mb-2'><p className="flex items-center"><FaEnvelope className='mr-2' /> thoughtSpeher@gmail.com</p></li>
                                    <li className='mb-2'><p className="flex items-center"><FaPhone className='mr-2' /> +1 234-567-890</p></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Newsletter</h3>
                            <p class="text-gray-400 mb-4">
                                Subscribe to our newsletter for the latest blog updates and exclusive content.
                            </p>
                            <form action="#" method="POST" class="flex flex-col space-y-2">
                                <input type="email" class="p-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-500" placeholder="Your email" required />
                                <button type="submit" class="p-2 bg-red-500 hover:bg-red-700 rounded text-white font-semibold">Subscribe</button>
                            </form>
                            <p className="text-xl font-semibold text-gray-400 mt-5">Follow Us:</p>
                            <div class="flex space-x-4 mt-4">
                                <a href="#" class="text-gray-400 hover:text-white">
                                    <FaFacebook className='text-2xl hover:text-red-500 transition-all duration-300' />
                                </a>
                                <a href="#" class="text-gray-400 hover:text-white">
                                    <FaInstagram className='text-2xl hover:text-red-500 transition-all duration-300' />
                                </a>
                                <a href="#" class="text-gray-400 hover:text-white">
                                    <FaTwitter className='text-2xl hover:text-red-500 transition-all duration-300' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-gray-700 mt-8 pt-4 text-center">
                        <p class="text-gray-500">&copy; 2024 ThoughtSphere. All rights reserved.</p>
                    </div>
                </div>
            </footer >

        </div >
    )
}

export default Footer
