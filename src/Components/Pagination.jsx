import React from 'react'

const Pagination = ({ onPageChange, blogs, currentPage, pageSize }) => {
    const totalPage = Math.ceil(blogs.length / pageSize);
    // console.log(totalPage);
    const renderPaginationLinks = () => {
        return Array.from({ length: totalPage }, (_, i) => i + 1).map((pageNumber) => (
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href="#" className='inline-block px-1.5 py-0.5 md:px-2 md:py-1 rounded border border-gray-500 hover:bg-gray-300 ' onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
    return (
        <div>
            <ul className='pagination my-8 flex items-center justify-center'>
                <li className='font-medium'><button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button></li>
                <div className="flex mx-1 md:mx-2">{renderPaginationLinks()}</div>
                <li className='font-medium'><button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPage}>Next</button></li>
            </ul>
        </div>
    )
}

export default Pagination
