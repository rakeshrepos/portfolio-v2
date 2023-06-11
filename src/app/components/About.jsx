'use client';
import React,{useEffect} from 'react'

function About() {

    useEffect(() => {
        
        const updatePosition = (e) =>{
            document.querySelectorAll('.layer').forEach(layer =>{
                const speed = layer.getAttribute('data-speed')/10

                const x = (window.innerWidth - e.pageX*speed)/30
                const y = (window.innerHeight - e.pageY*speed)/30

                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }

        window.addEventListener("mousemove", updatePosition);
        return() => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);
    return (
        <div className='bg-[#000] relative min-h-screen max-w-screen'>
            <div className="absolute text-white w-full z-[1] overflow-x-hidden">
                <div className='relative min-h-screen w-full overflow-x-hidden'>
                    <img src="/shapes/shape1.png" data-speed="-5" className='layer w-[8rem] absolute z-[2] top-[30%] left-[5%]'/>
                    <img src="/shapes/shape2.png" data-speed="5" className='layer w-[6rem] absolute z-[1] top-[50%] left-[20%]'/>
                    <img src="/shapes/shape3.png" data-speed="2" className='layer w-[2rem] absolute z-[1] top-[50%] right-[15%]'/>
                    <img src="/shapes/shape4.png" data-speed="6" className='layer w-[3rem] absolute z-[1] top-[40%] right-[16%]'/>
                    <img src="/shapes/shape5.png" data-speed="8" className='layer w-[5rem] absolute z-[1] top-[60%] right-[7%]'/>
                    <img src="/shapes/shape6.png" data-speed="-2" className='layer w-[3rem] absolute z-[1] top-[40%] right-[60%]'/>
                    <img src="/shapes/shape7.png" data-speed="4" className='layer w-[20rem] absolute z-[1] top-[40%] right-[30%]'/>
                    <img src="/shapes/shape8.png" data-speed="-9" className='layer w-[5rem] absolute z-[2] top-[40%] right-[30%]'/>
                    <img src="/shapes/shape8.png" data-speed="-9" className='layer w-[5rem] absolute z-[2] top-[70%] left-[20%]'/>
                    <img src="/shapes/shape9.png" data-speed="6" className='layer w-[2rem] absolute z-[1] top-[70%] left-[20%]'/>
                    <img src="/shapes/shape10.png" data-speed="-7" className='layer w-[2rem] absolute z-[1] top-[60%] right-[20%]'/>
                    <img src="/shapes/shape11.png" data-speed="2" className='layer w-[2rem] absolute top-[70%] left-[30%]'/>
                </div>
            </div>
            <div className='relative z-[2] flex flex-col justify-center pt-12 lg:pt-0'>
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
                        <p className='lg:w-[40rem] text-center text-gray-400'>I will help you build your brand and grow your business. I create clarifying strategy, beautiful logo and identity design, engaging websites and ongoing marketing support.
                        </p>

                        <div id="image" className="flex-1 p-2">
                            <img src="/hero.png" alt="" className='h-[20rem] object-contain'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
