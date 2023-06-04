import React from 'react'

function About() {
    return (
        <div className='h-screen flex flex-col justify-center px-[5rem]'>
            <div>
                <div className="flex justify-center">
                    <p className='text-green text-sm'>ABOUT ME</p>

                </div>
                <div className='w-full flex-1 h-full flex flex-col items-center mt-2'>
                    <h1 className='text-[3rem] font-semibold text-slate-200'>Hello, I'm
                        <span className='px-[0.5rem] bg-teal-400/10 text-white'>Rakesh Rebbavarapu</span>
                    </h1>
                    <h2 className='text-[3rem] font-semibold'>I'm working as UX/UI Designers.</h2>
                    <p className='w-[40rem] text-center'>I will help you build your brand and grow your business. I create clarifying strategy, beautiful logo and identity design, engaging websites and ongoing marketing support.
                    </p>

                    <div id="image" className="flex-1 p-2">
                        <img src="/hero.png" alt="" className='h-[25rem]'/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About
