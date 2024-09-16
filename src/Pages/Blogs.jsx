import React from 'react'
import BlogPage from '../Components/BlogPage'

const Blogs = () => {
    return (
        <div>
            <div className="py-40 bg-black text-white text-center px-4">
                <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blog Page</h2>
                <p className="text-lg max-w-2xl md:max-w-5xl mx-auto">Welcome to our Blogs page! Here, you’ll find a diverse collection of articles that delve into a variety of topics. From insightful commentary and expert tips to inspiring stories and the latest trends, our blog is your go-to source for engaging content.</p>
            </div>
            {/* all blogs container */}
            <div className="max-w-7xl mx-auto">
                <BlogPage />
            </div>
        </div>
    )
}

export default Blogs
