import { projects } from '@/data';

export default function Projects() {
  const hasProjectsWithLinks = projects.some((project) => project.github || project.demo);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Engineering Challenge:</h4>
                <p className="text-gray-300 text-sm">{project.challenge}</p>
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {!hasProjectsWithLinks && (
          <p className="text-center text-gray-400 text-sm mt-8">
            Add project links in <code>src/data/index.ts</code> to display GitHub and demo URLs.
          </p>
        )}
      </div>
    </section>
  );
}
