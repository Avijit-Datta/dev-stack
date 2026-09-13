function Hero() {
  return (
    <section id="home" className="border-b border-neutral-800">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build your
            <br />
            <span className="gradient-text">technology stack</span>
          </h1>

          <p className="text-textSecondary mt-5 max-w-md">
            Browse frontend, backend, database, and tooling picks, compare
            them at a glance, and collect the ones you want into your own
            stack.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#technologies"
              className="bg-brand-gradient text-black font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="border border-neutral-700 text-textSecondary font-semibold text-sm px-6 py-3 rounded-full hover:text-white hover:border-neutral-500"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative max-w-sm mx-auto w-full">
          <div className="absolute inset-0 bg-brand-gradient opacity-20 blur-3xl rounded-full"></div>
          <div className="relative bg-surface border border-neutral-800 rounded-2xl p-10 grid grid-cols-2 gap-8">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-14 h-14 mx-auto"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              className="w-14 h-14 mx-auto"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="w-14 h-14 mx-auto"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind CSS"
              className="w-14 h-14 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
