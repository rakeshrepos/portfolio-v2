import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {FiInstagram} from "react-icons/fi";

function More() {
    return (
        <div className='bg-[#000]'>
            <div className='h-screen container mx-auto px-[5rem] py-[4rem]'>
                <div className="w-full flex justify-center text-custom_blue">
                    <p>
                        MORE ABOUT ME
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <p className='w-[60rem] text-center mt-10'>As a Full Stack Developer, I am a passionate and skilled professional with expertise in front-end and back-end technologies. Proficient in JavaScript, Python, or Java, I create dynamic user interfaces using frameworks like React or Angular. On the back end, I utilize Node.js or PHP to build robust APIs and work with databases and frameworks like Express or Django. I excel in problem-solving, collaboration, and delivering high-quality code. Adaptable and continuously learning, I contribute to the development of innovative applications and ensure exceptional user experiences.</p>
                </div>

                <div className="mt-10 text-gray-400">
                    <marquee behavior="" direction="">HTML · CSS · JavaScript · Tailwind CSS · Jquery · Ajax · ReactJS · VueJS · AngularJS · Git · Python · PHP · Java · Laravel HTML · CSS · JavaScript · Tailwind CSS · Jquery · Ajax · ReactJS · VueJS · AngularJS · Git · Python · PHP · Java · Laravel · HTML · CSS · JavaScript · Tailwind CSS · Jquery · Ajax · ReactJS · VueJS · AngularJS · Git · Python · PHP · Java · Laravel ·  HTML · CSS · JavaScript · Tailwind CSS · Jquery · Ajax · ReactJS · VueJS · AngularJS · Git · Python · PHP · Java · Laravel
                    </marquee>
                    <marquee behavior="" direction="">HTML · CSS · JavaScript · Tailwind CSS · Jquery · Ajax · ReactJS · VueJS · AngularJS · Git · Python · PHP · Java · Laravel HTML · CSS · JavaScript · Tailwind CSS · Jquery · Ajax · ReactJS · VueJS · AngularJS · Git · Python · PHP · Java · Laravel · HTML · CSS · JavaScript · Tailwind CSS · Jquery · Ajax · ReactJS · VueJS · AngularJS · Git · Python · PHP · Java · Laravel ·  HTML · CSS · JavaScript · Tailwind CSS · Jquery · Ajax · ReactJS · VueJS · AngularJS · Git · Python · PHP · Java · Laravel
                    </marquee>
                </div>

                <div className="flex flex-col justify-center mt-10">
                    <p className='text-center text-custom_pink'>CONTACT</p>
                    <p className='text-center '>Contact me here to hire me or talk about a project</p>
                    <a href="mailto:rebbavarapurakesh@gmail.com" className='text-center underline text-gray-400 relative z-[2]'>rebbavarapurakesh@gmail.com</a>
                    <div className="flex justify-center mt-10 gap-2">
                        <a className='hover:mt-[-5px] transition-all duration-500' href="https://linkedin.com/in/rakeshrebbavarapu" target="_blank">
                            <BsLinkedin className='h-[1.5rem] w-[1.5rem]'/>
                        </a>
                        <a className='hover:mt-[-5px] transition-all duration-500' href="https://github.com/rakeshrepos" target="_blank">
                            <AiFillGithub className='h-[1.5rem] w-[1.5rem]'/>
                        </a>
                        <a className='hover:mt-[-5px] transition-all duration-500' href="https://instagram.com/theamigoooooo" target="_blank">
                            <FiInstagram className='h-[1.5rem] w-[1.5rem]'/>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default More
