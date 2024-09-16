import React from 'react'
import { useState } from 'react'
import { accordion } from '../assets/assets'
import { FaPlus, FaMinus } from "react-icons/fa6";
import AccordionItem from '../Components/AccordionItem';

const Services = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i);
    }


    return (
        <div>
            <div className="py-40 bg-black text-white text-center px-4">
                <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>FAQs</h2>
                <p className="text-lg max-w-2xl md:max-w-5xl mx-auto">Welcome to our FAQs page! We’ve compiled a list of the most frequently asked questions to help you find the answers you need quickly and easily. Whether you’re looking for information about our services, policies, or how to get started, this page is designed to provide you with clear and concise responses.</p>
            </div>
            <div class="my-16 max-w-5xl mx-3 md:mx-auto">
                <p className='text-4xl font-semibold text-center my-8'>Frequently Asked Questions</p>
                {/* <p className='text-lg text-center my-2'>We’ve compiled a list of the most frequently asked questions to help you navigate our platform. If you can’t find the answer you’re looking for, feel free to <a href="/contact">contact us</a>.</p> */}
                <div>
                    <div className="accordion">
                        {
                            accordion.map((item, i) => (
                                <div className="item bg-gray-100 my-4">
                                    <div className="title px-6 py-3 flex items-center justify-between bg-gray-200" onClick={() => toggle(i)}>
                                        <p className="text-lg font-semibold">{item.ques}</p>
                                        <span>{selected === i ? <FaMinus /> : <FaPlus />}</span>
                                    </div>
                                    <div className={selected === i ? 'content show' : 'content hidden'}>
                                        <p className="px-6 py-3">{item.ans}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
