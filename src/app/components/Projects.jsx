import React from 'react'

function Projects() {
    return (
        <div className='container mx-auto px-[5rem]'>
            <div className="flex justify-center">
                <p className='font-semibold tracking-tight text-custom_pink'>PROJECTS</p>

            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className='group p-[2rem] bg-custom_blue/10 hover:translate-y-[-8px] transition-all duration-500'>
                    <div className="flex items-center justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 text-custom_pink">
                            <title>Folder</title>
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <a href="s">
                            <p className='hidden'>Project</p>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 hover:text-custom_pink">
                                <title>External Link</title>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>

                    <h1 className='text-[1.5rem] font-bold leading-[1.8rem] mt-2 text-slate-200 group-hover:text-custom_pink'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem nisi
                    </h1>
                    <p className="text-base mt-2 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni itaque, ipsam veniam dignissimos repellat temporibus dolorum ab soluta quae, delectus doloribus, architecto quidem accusantium molestiae porro perspiciatis. Voluptates, dolorem. Officiis.</p>
                    <div className="mt-5 text-sm flex gap-4 text-gray-400">
                        <p>React js</p>
                        <p>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
