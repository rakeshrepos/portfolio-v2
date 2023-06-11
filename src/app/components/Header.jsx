import React from 'react'

function Header() {
    return (<div className='fixed w-full py-[1rem] px-[1rem] lg:px-[4rem] z-[5]'>
        <div className="flex justify-between">
            <a href="/">
                <section className="shape-section relative">
                    <div className="absolute z-[-1] rotate-[45deg]  -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="container diamond-shape">
                        <div className="logo relative font-bold  text-custom_blue">R</div>
                    </div>
                </section>
            </a>
            <a href="mailto:rebbavarapurakesh@gmail.com">

                <div className="">
                    <div className="grid gap-8 items-start justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                                <span className="flex items-center space-x-5">
                                    <span className=" text-gray-100">Contact Me</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>


            </a>
        </div>
    </div>)
}

export default Header
