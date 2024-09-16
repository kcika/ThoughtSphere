import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa6'


const BlogsCard = ({ blogs, currentPage, selectedCategory, pageSize }) => {

    const filteredBlogs = blogs
        .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
        .slice((currentPage - 1) * pageSize, currentPage * pageSize);
    console.log(filteredBlogs)

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {
                filteredBlogs.map((blog) => <Link key={blog.id} className='p-5 shadow-lg hover:shadow-xl rounded cursor-pointer'>
                    <div>
                        <img src={blog.image} className='w-full' alt="Image" />
                    </div>
                    <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer transition-all duration-200 ease-in'>{blog.title}</h3>
                    <p className="mb-2 text-gray-600"><FaUser className='inline-flex items-center mr-2' />{blog.author}</p>
                    <p className="text-sm text-gray-600">Published: {blog.published_date}</p>
                </Link>
                )
            }
        </div>
    )
}

export default BlogsCard
