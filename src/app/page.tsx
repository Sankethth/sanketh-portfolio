import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Writings from '@/components/Writings';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Writings />
      <Contact />
    </div>
  );
}
