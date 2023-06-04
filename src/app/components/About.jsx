import React from 'react'

function About() {
    return (
        <div className='min-h-screen flex flex-col justify-center px-[5rem]'>
            <div>
                <div className="flex justify-center mt-5">
                    <p className='text-custom_blue text-sm'>ABOUT ME</p>

                </div>
                <div className='w-full flex-1 h-full flex flex-col items-center mt-2'>
                    <h1 className='text-[3rem] font-semibold text-slate-200 '>Hello, I'm
                        <span className='px-[0.8rem] animated-text animated-text-blue'>Rakesh Rebbavarapu</span>
                    </h1>
                    <h2 className='text-[3rem] font-semibold'>I'm working as
                        <span className='px-[0.8rem] animated-text animated-text-pink'>
                            UX/UI Designers.
                        </span>
                    </h2>
                    <p className='w-[40rem] text-center text-gray-400'>I will help you build your brand and grow your business. I create clarifying strategy, beautiful logo and identity design, engaging websites and ongoing marketing support.
                    </p>

                    <div id="image" className="flex-1 p-2">
                        <img src="/hero.png" alt="" className='h-[20rem] object-contain'/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
