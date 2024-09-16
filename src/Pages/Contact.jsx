import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const Contact = () => {
    return (
        <div>
            <div className="py-40 bg-black text-white text-center px-4">
                <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Page</h2>
                <p className="text-lg max-w-5xl mx-auto">We love hearing from our readers! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Here’s how you can connect with us:</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <p className="text-4xl font-semibold text-center my-4">Send Us a Message</p>
                <form action="/submit-form" method="POST">
                    <label for="name" className='font-medium'>Your Name:</label>
                    <input type="text" className='border w-full rounded-md px-4 py-2 border-gray-300 my-3' placeholder='Name' id="name" name="name" required />

                    <label for="email" className='font-medium'>Your Email:</label>
                    <input type="email" className='border w-full rounded-md px-4 py-2 border-gray-300 my-3' placeholder='Email' id="email" name="email" required />

                    <label for="message" className='font-medium'>Message:</label>
                    <textarea id="message" className='border w-full rounded-md px-4 py-2 border-gray-300 my-3' placeholder='Message' name="message" rows="4" required></textarea>

                    <button type="submit" className='block max-w-40 mx-auto text-center bg-red-500 border border-red-500 px-8 py-2 my-3 text-white rounded text-lg font-semibold hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-200 ease-in'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
