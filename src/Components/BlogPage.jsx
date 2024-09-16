import React, { useEffect, useState } from 'react'
import BlogsCard from './BlogsCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {

    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null); // Handling errors
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; //no of blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        // async function fetchBlogs(params) {
        //     let url = `./blogsData.json`;

        //     const response = await fetch(url);
        //     const data = await response.json();
        //     setBlogs(data);
        // }
        const fetchBlogs = async () => {

            try {
                let url = `./blogsData.json?page=${currentPage}&limit=${pageSize}`;
                // filtered category
                if (selectedCategory) {
                    url += `&category=${selectedCategory}`;
                }

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                setError(error.message);
                console.error("There was an error in fetching the data", error)
            }
        }
        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }

    return (
        <div>
            {/* category section */}
            <div>
                <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
            </div>

            {/* blogcards section */}
            <div className='flex flex-col lg:flex-row gap-12'>
                {/* blogcard components */}
                <BlogsCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

                {/* sidebar components */}
                <div className="">
                    <SideBar />
                </div>

            </div>

            {/* pagination section */}
            <div>
                <Pagination onPageChange={handlePageChange} blogs={blogs} currentPage={currentPage} pageSize={pageSize} />
            </div>
        </div>
    )
}

export default BlogPage
