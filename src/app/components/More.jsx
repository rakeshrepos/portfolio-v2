import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {FiInstagram} from "react-icons/fi";

function More() {
    return (
        <div className='h-screen container mx-auto px-[5rem] py-[4rem]'>
            <div className="w-full flex justify-center text-custom_blue">
                <p>
                    MORE ABOUT ME
                </p>
            </div>

            <div className="w-full flex justify-center">
                <p className='w-[60rem] text-center mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corrupti illum dignissimos cupiditate adipisci dolore enim odit esse, delectus aut aperiam iste distinctio facilis qui. Nesciunt voluptates eos impedit necessitatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga architecto voluptatem tenetur debitis, voluptate temporibus laboriosam doloremque explicabo et. Incidunt dicta cumque sed vel velit nostrum excepturi obcaecati odio omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nam officiis ea nesciunt enim sunt dolores quos cum vitae iste. Atque, labore odio. Blanditiis quisquam, vero dolorum incidunt dignissimos velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolores ullam magni eum doloremque consectetur sequi dolorum dolor quae voluptates, porro iusto facilis delectus nam distinctio a amet quibusdam? Nisi!</p>
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
    )
}

export default More
