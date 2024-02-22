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
      <section>
        <Navbar />
      </section>

      <section>
        <Hero />
      </section>

      <section>
        <AboutMe/>
      </section>

      <section style={{display:"flex",justifyContent:"center"}}>
        <Projects />
      </section>

      <section>
        <Experience />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>

    </main>
  )
}