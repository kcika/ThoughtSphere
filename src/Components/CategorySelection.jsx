import React from 'react'

const CategorySelection = ({ onSelectCategory, activeCategory }) => {

    const categories = ["Startups", "Security", "AI", "Apps", "Tech"]


    return (
        <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap justify-center items-center border-b-2 py-5 text-gray-900'>
            <button onClick={() => onSelectCategory(null)} className={`text-lg font-medium mx-2 lg:ml-12 ${activeCategory ? "" : "active-button"}`}>All</button>
            {
                categories.map((category) => (
                    <button onClick={() => onSelectCategory(category)}
                        className={`mx-2 space-x-16 font-medium text-lg ${activeCategory === category ? "active-button" : ""}`}
                        key={category}>
                        {category}
                    </button>
                ))
            }
        </div>
    )
}

export default CategorySelection
