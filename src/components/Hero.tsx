import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 dark:bg-(--background)"
    >
      {" "}
      {/* Added dark mode background color. FIXME KATO miten vitus noi @theme jutut toimii index.css. se toimii nyt ku kaikki on themen alla. voiko tehä darkille oman themen? TODO*/}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30 pointer-events-none" />{" "}
      {/* Subtle background gradient. Pointer-events-none makes it clickable again*/}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 dark:text-white">
        Hi, I am{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Riku
        </span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mb-8">
        {" "}
        {/* max-w-2xl limits the width of the paragraph. */}
        Junior Developer passionate about creating clean, modern, and functional
        web experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
        >
          Contact Me
        </a>
      </div>
      {/* socials  */}
      <div className="flex gap-4 text-gray-600 dark:text-gray-300">
        <a
          href=""
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:-translate-y-1"
        >
          <Github size={30} />
        </a>
        <a
          href=""
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:-translate-y-1"
        >
          <Linkedin size={30} />
        </a>
        {/* TODO vaarassa vanheta */}
        <a
          href=""
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:-translate-y-1"
        >
          <Mail size={30} />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center text-gray-500 dark:text-gray-400">
        <span className="mb-2">Scroll Down</span>
        <ArrowDown className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
