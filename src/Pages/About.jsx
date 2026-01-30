

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          About <span className="text-blue-500">Me</span>
        </h1>

        {/* Intro */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-16">
          I’m a frontend developer who loves crafting clean, engaging, and
          scalable web experiences. I focus on building interfaces that feel
          intuitive, modern, and purposeful.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              My Journey
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I started my journey with a curiosity for how the web works and
              quickly fell in love with frontend development. Over time, I’ve
              developed a strong foundation in React, modern JavaScript, and
              responsive design.
            </p>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              What I Do
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li>• Build modern React applications</li>
              <li>• Create responsive & accessible UI</li>
              <li>• Focus on performance & clean code</li>
              <li>• Turn ideas into polished products</li>
            </ul>
          </div>

        </div>

        {/* Skills */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">
            Technologies I Use
          </h2>

          <div className="flex flex-wrap gap-4">
            {[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "HTML",
              "CSS",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg bg-white/10 text-sm text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
