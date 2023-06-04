"use client";
import React, {useState} from 'react'

function Work() {

    const [step, setStep] = useState(1);
    return (
        <div className='relative z-[1] grid grid-cols-1 lg:grid-cols-2 px-[5rem] container mx-auto'>
            <div>
                <img src="/work.png" alt=""/>
            </div>
            <div>
                <p className='text-custom_blue text-sm'>WHERE I'VE WORKED</p>
                <h1 className='text-lightest_slate text-[3rem] font-semibold'>I'm using top leading design methods.</h1>
                <p className=' mt-2 text-gray-400'>I specialize in helping early stage startups validate their riskiest assumptions using leading design methods.</p>

                <div className="flex mt-5">
                    <button onClick={
                            () => {
                                setStep(1)
                            }
                        }
                        className={
                            `transition-all text-sm duration-700 hover:text-custom_blue hover:bg-custom_blue/10 px-[1rem] py-[0.5rem] border-b-[2px]  ${
                                step === 1 ? 'text-custom_blue border-custom_blue bg-custom_blue/10' : 'border-slate-600'
                            }`
                    }>Resolute B2B</button>
                    <button onClick={
                            () => {
                                setStep(2)
                            }
                        }
                        className={
                            `transition-all text-sm duration-500 hover:text-custom_blue hover:bg-custom_blue/10 px-[1rem] py-[0.5rem] border-b-[2px] ${
                                step === 2 ? 'text-custom_blue border-custom_blue bg-custom-blue/10' : 'border-gray-600'
                            }`
                    }>Cloudkakshaa</button>
                </div>
                <div>
                    <section id="experience" className="" aria-label="Work experience">
                        <div className='mt-5'>
                            <ol className="group/list">
                                <li className={
                                    `mb-12 ${
                                        step === 1 ? 'block' : ' hidden'
                                    }`
                                }>
                                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to Present">Sep 2022 - Present</header>
                                        <div className="z-10 sm:col-span-6">
                                            <h3 className="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-custom_blue focus-visible:text-custom-blue  group/link text-base" href="https://upstatement.com" target="_blank" rel="noreferrer" aria-label="Lead Engineer at Upstatement">
                                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>Full Stack Developer -

                                                            <span className="inline-block">
                                                                Resolute B2B<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </h3>
                                            <p className="mt-2 text-sm leading-normal text-gray-400">Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p>
                                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-custom_blue/10 px-3 py-1 text-xs font-medium leading-5 text-custom_blue ">React</div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-custom_blue/10 px-3 py-1 text-xs font-medium leading-5 text-custom_blue ">Vue</div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-custom_blue/10 px-3 py-1 text-xs font-medium leading-5 text-custom_blue ">Laravel</div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-custom_blue/10 px-3 py-1 text-xs font-medium leading-5 text-custom_blue ">WordPress</div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-custom_blue/10 px-3 py-1 text-xs font-medium leading-5 text-custom_blue ">JavaScript</div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-custom_blue/10 px-3 py-1 text-xs font-medium leading-5 text-custom_blue ">Tailwind Css</div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-custom_blue/10 px-3 py-1 text-xs font-medium leading-5 text-custom_blue ">PHP</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className={
                                    `mb-12 ${
                                        step === 2 ? 'block' : ' hidden'
                                    }`
                                }>
                                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="July to December 2017">Aug 2021 - Mar 2022</header>
                                        <div className="z-10 sm:col-span-6">
                                            <h3 className="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-custom_blue focus-visible:text-custom_blue  group/link text-base" href="https://www.cloudkakshaa.org/" target="_blank" rel="noreferrer" aria-label="UI Engineer Co-op at Apple">
                                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>CloudKakshaa

                                                            <span className="inline-block">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </h3>
                                            <p className="mt-2 text-sm leading-normal">Developed and styled interactive web apps for Apple Music, including the UI of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.</p>
                                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-custom_blue/10 px-3 py-1 text-xs font-medium leading-5 text-custom_blue ">PHP</div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-custom_blue/10 px-3 py-1 text-xs font-medium leading-5 text-custom_blue ">Jquery</div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-custom_blue/10 px-3 py-1 text-xs font-medium leading-5 text-custom_blue ">Tailwind Css</div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-custom_blue/10 px-3 py-1 text-xs font-medium leading-5 text-custom_blue ">Bootstrap</div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-custom_blue/10 px-3 py-1 text-xs font-medium leading-5 text-custom_blue ">Ajax</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                            </ol>
                            <div className="mt-12">
                                <a className="inline-flex items-center leading-tight font-semibold text-slate-200 group" aria-label="View Full Resume" href="/resume.pdf">
                                    <span>
                                        <span className="border-b border-transparent pb-px transition group-hover:border-custom_blue motion-reduce:transition-none">View Full

                                        </span>
                                        <span className="whitespace-nowrap">
                                            <span className="border-b border-transparent pb-px transition group-hover:border-custom_blue motion-reduce:transition-none">Resume</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Work
