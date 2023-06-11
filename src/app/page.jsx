'use client';


import About from './components/About';
import Footer from './components/Footer';
import More from './components/More';
import Projects from './components/Projects';
import Work from './components/Work';
export default function Home() {

    return (<>

    {/* <ScrollSections /> */}
        <About/>
        <Work/>
        <Projects/>
        <More/>
        <Footer/>
    </>)
}
