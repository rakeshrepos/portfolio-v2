import React from 'react'

function Header() {
    return (
        <div className='fixed w-full py-[1rem] px-[4rem] z-[2]'>
            <div className="flex justify-between">
                <a href="/">R</a>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default Header