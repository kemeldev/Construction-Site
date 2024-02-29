import Navbar from "./Navbar/Navbar"
import Experience from "./Experience/Experience"
import Contact from "./Contact/Contact"
import AboutMe from "./AboutMe/AboutMe"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"

export function Home () {

  return (
    <main>
      <section id="home">
        <Navbar />
      </section>

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutMe/>
      </section>

      <section id="projects" style={{display:"flex",justifyContent:"center"}}>
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>

    </main>
  )
}