import { lazy, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import Terminal from './components/Terminal';
import CommandPalette from './components/CommandPalette';
import BackToTop from './components/BackToTop';
import TabTitleGreeting from './components/TabTitleGreeting';
import Hero from './sections/Hero';

// Below-the-fold sections are code-split to keep the initial bundle small.
const About = lazy(() => import('./sections/About'));
const Services = lazy(() => import('./sections/Services'));
const Experience = lazy(() => import('./sections/Experience'));
const Education = lazy(() => import('./sections/Education'));
const Projects = lazy(() => import('./sections/Projects'));
const Skills = lazy(() => import('./sections/Skills'));
const GitHubActivity = lazy(() => import('./sections/GitHubActivity'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const FAQ = lazy(() => import('./sections/FAQ'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <div className="relative overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-black focus:font-semibold focus:shadow-lg"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Services />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <GitHubActivity />
          <Testimonials />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Terminal />
      <CommandPalette />
      <BackToTop />
      <TabTitleGreeting />
      <Analytics />
    </div>
  );
}

export default App;
