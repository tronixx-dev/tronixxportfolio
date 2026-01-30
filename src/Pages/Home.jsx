const Home = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">

      {/* Overlay Content */}
      <div className="z-10 text-center px-6 max-w-3xl">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
          Hi, This is <span className="text-blue-500">Tronixxware</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed">
          A passionate frontend developer crafting modern, scalable, and
          beautiful web experiences with React.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a
            href="http://localhost:5173/projects"
            className="px-8 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
          >
            View Projects
          </a>

          <a
            href="http://localhost:5173/contact"
            className="px-8 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
    </section>
  );
};

export default Home;
