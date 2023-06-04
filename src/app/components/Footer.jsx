import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {FiInstagram} from "react-icons/fi";

function Footer() {
    return (
        <div className='fixed w-full bottom-10 flex justify-between px-[2rem] z-[1]'>
            <div className='w-[2rem] flex flex-col items-center'>
                <div className='flex flex-col gap-2 text-gray-400'>
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
                <div className='w-[1px] h-[80px] bg-white mt-4'></div>
            </div>
        </div>
    )
}

export default Footer
