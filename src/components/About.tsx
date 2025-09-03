function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-bold text-4xl dark:text-white">About me</h2>
        <p className="text-xl sm:text-xl text-gray-500 dark:text-gray-400">
          Learn more about my journey, passion, and what drives me as a
          developer.
        </p>
      </div>

      {/* grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* frame and bitmoji.*/}
        {/* box*/}
        <div className="flex justify-center">
          {/* frame */}
          <div className="flex w-full aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg justify-center items-center p-14">
            {/* bitmoji */}
            <div className="bg-white dark:bg-[var(--background)] rounded-2xl w-full h-full flex justify-center items-center p-8">
              <img
                src="src/assets/528f7f3e88fe812da8e0431b69ed2d23dc9169d644069e39dfd2dc1b4fcc59f4.0.png"
                alt="riku bitmoji"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* right side text */}
        <div className="text-lg">
          <h3 className="mb-4 text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Full Stack Developer & Problem Solver
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm a passionate full stack developer with a love for creating
            beautiful, functional web applications. My journey in programming
            started with curiosity and has evolved into a career focused on
            building user-centric solutions.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I enjoy working with modern technologies like React, TypeScript, and
            Node.js, always striving to write clean, maintainable code. When I'm
            not coding, you'll find me exploring new technologies or
            contributing to open-source projects.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I believe in continuous learning and staying up-to-date with
            industry trends. My goal is to create digital experiences that not
            only look great but also solve real-world problems.
          </p>
          {/* quick fax */}
          <div className="flex mt-8 gap-8">
            <div className="flex-1 text-center border border-gray-200 dark:border-gray-700 text-xl p-5 rounded-xl py-4 shadow-sm backdrop-blur-md">
              <p className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold">
                2+
              </p>
              <p className="text-gray-700 dark:text-gray-300">Years learning</p>
            </div>
            <div className="flex-1 text-center border border-gray-200 dark:border-gray-700 text-xl p-5 rounded-xl py-4 shadow-sm backdrop-blur-md">
              <p className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold">
                10+
              </p>
              <p className="text-gray-700 dark:text-gray-300">Projects Built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
