import { about } from '@/data';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About</h2>
        <div className="prose prose-lg prose-invert mx-auto">
          {about.summary.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-300 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}