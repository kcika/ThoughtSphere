import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>
            <div className="py-40 bg-black text-white text-center px-4">
                <h2 className='text-4xl lg:text-5xl leading-snug font-semibold mb-5'>Welcome to ThoughtSphere</h2>
                <p className="text-lg max-w-2xl md:max-w-5xl mx-auto">At ThoughtSpehere, we believe in the power of stories, knowledge, and community. Whether you're here to explore new ideas, deepen your understanding of the world, or simply enjoy a good read, we’ve got something for everyone.</p>
            </div>
            {/* story section */}
            <div className="py-5 lg:pt-10 max-w-screen-2xl mx-2 lg:mx-auto">
                <p className="text-5xl font-semibold text-center">Our Story</p>
                <div className='my-8 lg:my-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12'>
                    <div>
                        <img src={assets.storyImg} className='rounded-lg' width={"100%"} alt="" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <p className="text-3xl font-semibold mb-4">How we started</p>
                        <p className="text-lg mb-4">It all started in 2022 with a simple yet profound idea: to build a platform dedicated to celebrating a rich diversity of voices and stories from around the world. As passionate bloggers with firsthand experience, we identified a pressing need for a space that prioritizes genuine engagement over superficial metrics like clicks. Our vision was to create a community where every individual’s story is not only heard but valued, and where meaningful interactions and authentic connections can flourish. We aimed to foster an environment that enriches the dialogue, encourages thoughtful discussions, and highlights the depth and breadth of diverse perspectives.</p>
                        <p className="text-lg"> Since then, ThoughtSphere has grown into a thriving community of 500 readers and contributors, all sharing their knowledge, experiences, and passions.</p>
                    </div>
                </div>
            </div>
            {/* mission section */}
            <div className="py-5 lg:py-8 max-w-screen-2xl mx-2 lg:mx-auto">
                <p className="text-5xl font-semibold text-center">Our Mission</p>
                <div className='my-8 lg:my-16 grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    <div className='flex flex-col justify-center order-2 lg:order-none'>
                        <p className="text-lg mb-4">At ThoughtSphere, our mission is to create a thriving digital ecosystem where stories, ideas, and knowledge flow freely, fostering a community of thinkers, creators, and readers. We are driven by three core principles</p>
                        <p className="text-lg font-medium mb-2">1. Inspire Creativity and Curiosity</p>
                        <p className='mb-3'>We believe that creativity is sparked by curiosity. Our platform is designed to inspire readers and writers alike to explore new perspectives, push boundaries, and discover the unexpected.</p>
                        <p className="text-lg font-medium mb-2">2. Empower Voices, Both Big and Small</p>
                        <p className="mb-3">Every voice matters, and at ThoughtSphere, we are committed to amplifying voices from all walks of life. We provide a platform where everyone—from thought leaders to emerging creators—can share their unique experiences and insights.</p>
                        <p className="text-lg font-medium mb-2">3.  Advocate for Knowledge Sharing</p>
                        <p className="mb-4">We stand for the free and open exchange of ideas. Our mission is to democratize information by offering readers in-depth articles, expert advice, and practical tips across a wide range of subjects.</p>
                        <p className="text-lg">Together, these principles shape the heart of ThoughtSphere: a place where creativity meets community, knowledge meets expression, and stories meet their audience.</p>
                    </div>
                    <div>
                        <img src={assets.missionImg} className='rounded-lg' width={"100%"} alt="" />
                    </div>
                </div>
            </div>
            {/* team section */}
            <div className="py-5 lg:py-8 max-w-screen-2xl mx-2 lg:mx-auto">
                <p className="text-5xl font-semibold text-center mb-4">Meet The Team</p>
                <p className="text-lg mb-4 max-w-5xl text-center mx-auto">Behind every post, there’s a team of passionate individuals dedicated to bringing you the best content. From writers to editors, designers to developers, we all share a love for storytelling and community-building.</p>
                <div className='my-8 lg:my-16 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-screen-lg mx-auto'>
                    <div className="shadow-lg p-4 hover:shadow-2xl transition-all duration-200">
                        <div className="imgCont mb-3">
                            <img src={assets.founder} alt="" />
                        </div>
                        <p className="text-2xl font-medium">Mark Handrew</p>
                        <p className="text-lg font-medium my-1">Founder & Chief Blogger</p>
                        <p>Leading our editorial vision with a focus on authenticity, diversity, and engaging storytelling.</p>
                    </div>
                    <div className="shadow-lg p-4 hover:shadow-2xl transition-all duration-200">
                        <div className="imgCont mb-3">
                            <img src={assets.editor} alt="" />
                        </div>
                        <p className="text-2xl font-medium">Emily Walker</p>
                        <p className="text-lg font-medium my-1">Editor in chief</p>
                        <p>With a keen eye for detail, [Name] ensures the quality of every piece of content.</p>
                    </div>
                    <div className="shadow-lg p-4 hover:shadow-2xl transition-all duration-200">
                        <div className="imgCont mb-3">
                            <img src={assets.leaddev} alt="" />
                        </div>
                        <p className="text-2xl font-medium">Alice Amber</p>
                        <p className="text-lg font-medium my-1">Lead Developer</p>
                        <p>The tech wizard behind the scenes, Alice keeps the platform running smoothly.</p>
                    </div>
                </div>
            </div>
            {/* join us section */}
            <div className="py-5 lg:py-8 max-w-screen-2xl mx-2 lg:mx-auto">
                <p className="text-5xl font-semibold text-center mb-4">Join Us</p>
                <p className="text-lg mb-4 max-w-5xl text-center mx-auto">
                    We’re always looking for new voices to join our growing community of writers. If you have a passion for storytelling and a unique perspective to share, submit your work or reach out to us at ThoughtSpehere@gmail.com.
                </p>
                <div className="text-center">
                    <p className="text-lg font-semibold text-center">Stay Connected</p>
                    <p className="text-lg text-center my-2">Never miss a post! Follow us on:</p>
                    <p className='font-semibold'>Twitter: <span className="">@thoughtSphere</span></p>
                    <p className='font-semibold'>Instagram: <span className="">@thoughtSphere</span></p>
                    <p className='font-semibold'>Facebook: <span className="">@thoughtSphere</span></p>

                </div>
            </div>
        </div>
    )
}

export default About
