const projects = [
  {
    title: "Beeke Apparel",
    url: "https://www.beekeapparel.com",
    description:
      "A modern e-commerce fashion website focused on clean branding, smooth navigation, and a strong visual identity.",
    role: "Frontend Development",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "MeasureMate",
    url: "https://www.measuremate.styles",
    description:
      "A smart measurement and styling platform designed to improve user accuracy, usability, and responsiveness across devices.",
    role: "UI / Frontend Development",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Tronixx",
    url: "https://www.tronixx.org",
    description:
      "A tech-focused website built with performance and clarity in mind, presenting digital services with a clean and professional layout.",
    role: "Frontend Development",
    tech: ["React", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">

   
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Selected <span className="text-blue-500">Projects</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            A curated selection of projects I’ve worked on, focusing on clean
            design, usability, and modern frontend development.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 gap-10 items-center border-b border-white/10 pb-16"
            >
            
              <div>
                <h2 className="text-3xl font-semibold mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-sm text-gray-400 mb-4">
                  <span className="text-blue-400 font-medium">Role:</span>{" "}
                  {project.role}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1 rounded-full text-sm bg-white/10 text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 font-medium hover:underline"
                >
                  Visit Website
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

             
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
