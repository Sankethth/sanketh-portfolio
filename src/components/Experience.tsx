import { experience } from '@/data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="bg-gray-900 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h3 className="text-2xl font-semibold text-blue-400">{experience.role}</h3>
            <span className="text-gray-400">{experience.duration}</span>
          </div>
          <p className="text-xl text-gray-300 mb-6">{experience.company}</p>
          <ul className="space-y-4">
            {experience.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span className="text-gray-300 leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}