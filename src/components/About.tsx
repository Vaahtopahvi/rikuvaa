function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-bold text-4xl dark:text-[oklch(0.9422_0.011_211.04)]">
          whoami
        </h2>
        <p className="text-xl sm:text-xl text-gray-500 dark:text-gray-400">
          A long-time gamer, gym-enjoyer, and someone with a sharp eye for good
          design
        </p>
      </div>

      {/* grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* frame and pic*/}
        {/* box*/}
        <div className="flex justify-center">
          {/* frame */}
          <div className="flex w-full aspect-square rounded-2xl bg-[oklch(0.3943_0.0647_203.9)] dark:bg-[oklch(0.3943_0.0647_203.9)] shadow-lg justify-center items-center p-14">
            {/* pic, vaiha bitmoji johonki järkevään */}
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
          <h3 className="mb-4 text-3xl font-bold text-[oklch(0.3943_0.0647_203.9)] dark:text-[oklch(0.3943_0.0647_203.9)]">
            Developer & Problem Solver
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            To me, the web is like a digital canvas that offers limitless
            possibilities to create something unique. I grew up with computers,
            and my hobby of gaming and building computers naturally evolved into
            studying programming
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            In web development, my focus is on building interfaces that connect
            with users through thoughtful design and functionality. Starting
            with small, impactful details, with the goal of continuously honing
            my skills and creating larger, more impressive projects in the
            future
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I’m dedicated to continuous growth in the programming field and
            finding innovative ways to enhance my expertise. To support this,
            I’ve switched to using Linux as my primary OS, valuing
            its efficiency and alignment with my personal values, such as
            privacy
          </p>
          {/* quick fax */}
          <div className="flex mt-8 gap-8">
            <div className="flex-1 text-center border border-gray-200 dark:border-gray-700 text-xl p-5 rounded-xl py-4 shadow-sm backdrop-blur-md">
              <p className="text-2xl font-bold">
                2+
              </p>
              <p className="text-gray-700 dark:text-gray-300">Years learning</p>
            </div>
            <div className="flex-1 text-center border border-gray-200 dark:border-gray-700 text-xl p-5 rounded-xl py-4 shadow-sm backdrop-blur-md">
              <p className="text-2xl font-bold">
                10+
              </p>
              <p className="text-gray-600 dark:text-gray-300">Projects Built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
