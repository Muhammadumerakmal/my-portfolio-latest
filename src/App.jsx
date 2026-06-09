import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
