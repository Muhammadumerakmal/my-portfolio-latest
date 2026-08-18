import { lazy, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import Terminal from './components/Terminal';
import Hero from './sections/Hero';

// Below-the-fold sections are code-split to keep the initial bundle small.
const About = lazy(() => import('./sections/About'));
const Services = lazy(() => import('./sections/Services'));
const Experience = lazy(() => import('./sections/Experience'));
const Education = lazy(() => import('./sections/Education'));
const Projects = lazy(() => import('./sections/Projects'));
const Skills = lazy(() => import('./sections/Skills'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <div className="relative overflow-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Services />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Terminal />
      <Analytics />
    </div>
  );
}

export default App;
