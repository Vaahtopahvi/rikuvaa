import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 dark:bg-(--background)"
    >
      {" "}
      {/* dark mode background color */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30 pointer-events-none" />{" "}
      {/* Subtle background gradient. Pointer-events-none makes it clickable again */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 dark:text-[oklch(0.9422_0.011_211.04)]">
        Hi, I am <span className="text-[oklch(0.6826_0.2125_40.11)]">Riku</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mb-8">
        {" "}
        {/* max-w-2xl limits the width of the paragraph. */}
        Business IT Graduate, passionate about learning and building. Here's a
        glimpse of what I've been up to
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <a
          href="#projects"
          className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-[oklch(0.3943_0.0647_203.9)] dark:bg-[oklch(0.3943_0.0647_203.9)] hover:bg-[oklch(0.35_0.07_203.9)] dark:hover:bg-[oklch(0.35_0.07_203.9)] text-white dark:text-[oklch(0.9422_0.011_211.04)] transition-colors text-sm sm:text-base"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl border border-[oklch(0.3943_0.0647_203.9)] dark:border-[oklch(0.3943_0.0647_203.9)] text-[oklch(0.3943_0.0647_203.9)] dark:text-[oklch(0.5_0.0647_203.9)] hover:bg-[oklch(0.3943_0.0647_203.9)] dark:hover:bg-[oklch(0.3943_0.0647_203.9)] hover:text-white dark:hover:text-[oklch(0.9422_0.011_211.04)] transition text-sm sm:text-base"
        >
          Contact Me
        </a>
      </div>
      {/* socials */}
      <div className="flex gap-4 text-gray-600 dark:text-gray-300">
        <a
          href="https://github.com/Vaahtopahvi"
          target="_blank"
          rel="noopener"
          className="text-gray-700 dark:text-gray-300 hover:text-[oklch(0.3943_0.0647_203.9)] dark:hover:text-[oklch(0.3943_0.0647_203.9)] transition transform hover:-translate-y-1"
        >
          <Github size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/riku-vaatanen"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-gray-700 dark:text-gray-300 hover:text-[oklch(0.3943_0.0647_203.9)] dark:hover:text-[oklch(0.3943_0.0647_203.9)] transition transform hover:-translate-y-1"
        >
          <Linkedin size={30} />
        </a>
        {/* TODO vaarassa vanheta. sääli vaa :D */}
        <a
          href="mailto:riku.vaatanen@gmail.com"
          className="text-gray-700 dark:text-gray-300 hover:text-[oklch(0.3943_0.0647_203.9)] dark:hover:text-[oklch(0.3943_0.0647_203.9)] transition transform hover:-translate-y-1"
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
