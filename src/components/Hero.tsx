'use client';

import { personalInfo } from '@/data';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {personalInfo.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
          {personalInfo.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.shortIntro}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}