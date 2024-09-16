import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
            <div className="overlay"></div>
            <div className='absolute max-w-3xl mx-3 md:mx-auto top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 -translate-y-1/2'>
                <p className="text-4xl text-white text-center my-8">Login</p>
                <form action="/submit-form" method="POST">
                    <label for="name" className='text-lg text-white font-medium'>Your Name:</label>
                    <input type="text" className='border w-full rounded-md px-4 py-2 border-gray-300 my-3' placeholder='Name' id="name" name="name" required />

                    <label for="password" className='text-lg text-white font-medium'>Your Password:</label>
                    <input type="password" className='border w-full rounded-md px-4 py-2 border-gray-300 my-3' placeholder='Email' id="email" name="email" required />

                    <p className="text-lg text-center text-white py-3">Don't have an account? <Link to="/register" className='hover:text-red-500'>Register Now</Link></p>

                    <button type="submit" className='block max-w-40 mx-auto text-center bg-red-500 border border-red-500 px-8 py-2 my-3 text-white rounded text-lg font-semibold hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-200 ease-in'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
