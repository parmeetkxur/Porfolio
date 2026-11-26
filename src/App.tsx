import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { WhyMe } from './components/WhyMe'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { SectionId } from './config/sections'

const App: React.FC = () => {
  return (
    <div className="bg-dark-grid min-h-screen text-white">
      <Navbar />
      <main>
        <Hero id={SectionId.Home} />
        <About id={SectionId.About} />
        <WhyMe id={SectionId.WhyMe} />
        <Projects id={SectionId.Projects} />
        <Contact id={SectionId.Contact} />
      </main>
      <Footer />
    </div>
  )
}

export default App
