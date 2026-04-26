import { writings } from '@/data';

export default function Writings() {
  const hasAnyPublishedWriting = writings.some((writing) => Boolean(writing.link));

  return (
    <section id="writings" className="py-20 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Writings & Ideas</h2>
        <div className="space-y-6">
          {writings.map((writing, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{writing.title}</h3>
              <p className="text-gray-300 mb-4">{writing.description}</p>
              {writing.link ? (
                <a
                  href={writing.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  Read more →
                </a>
              ) : (
                <p className="text-gray-500 text-sm">Draft in progress</p>
              )}
            </div>
          ))}
        </div>
        {!hasAnyPublishedWriting && (
          <p className="text-center text-gray-400 text-sm mt-8">
            Add writing links in <code>src/data/index.ts</code> to enable &quot;Read more&quot;.
          </p>
        )}
      </div>
    </section>
  );
}
