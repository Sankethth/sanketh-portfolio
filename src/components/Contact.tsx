import { contact } from '@/data';

export default function Contact() {
  const hasContactInfo = contact.email || contact.github || contact.linkedin;

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Get In Touch</h2>
        {hasContactInfo ? (
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <span className="text-lg">Email: {contact.email}</span>
              </a>
            )}
            {contact.github && (
              <a
                href={contact.github}
                className="bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-lg transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg">GitHub</span>
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                className="bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-lg transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg">LinkedIn</span>
              </a>
            )}
          </div>
        ) : (
          <p className="text-gray-400">
            Add contact details in <code>src/data/index.ts</code> to enable this section.
          </p>
        )}
      </div>
    </section>
  );
}
