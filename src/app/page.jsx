import Image from 'next/image'
import About from './components/About'
import Work from './components/Work'
import Projects from './components/Projects'
import Footer from './components/Footer'
import More from './components/More'
export default function Home() {
  return (
    <>
      <About />
      <Work />
      {/* <Projects /> */}
      {/* <More /> */}
      <Footer />
    </>
  )
}
