import { skills } from '@/data';

export default function Skills() {
  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Backend', items: skills.backend },
    { title: 'Infrastructure', items: skills.infrastructure },
    { title: 'Databases', items: skills.databases },
    { title: 'Observability', items: skills.observability },
    { title: 'Other', items: skills.other },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}