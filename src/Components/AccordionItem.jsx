import React, { useState } from 'react'
import { accordion } from '../assets/assets';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const AccordionItem = () => {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div>
            <div className="wrapper">
                <div className="accordion">
                    {
                        accordion.map((item, index) =>
                            <div className="item my-4 bg-gray-100">
                                <button onClick={() => setAccordionOpen(!accordionOpen)}
                                    className="title bg-gray-200 p-3 my-2 rounded-lg flex justify-between items-center w-full">
                                    <p className="text-lg font-semibold">{item.ques}</p>
                                    <span>{accordionOpen ? <FaMinus /> : <FaPlus />}</span>
                                </button>
                                <div className="answer p-3 transition-all duration-300 ease-in-out">
                                    <p>{item.ans}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default AccordionItem

