import { skills, currentlyLearning } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-bold text-4xl dark:text-white">
          Skills & Technologies
        </h2>
        <p className="text-xl sm:text-xl text-gray-500 dark:text-gray-400">
          Here are the technologies and skills I work with to bring ideas to
          life.
        </p>
      </div>

      {/* grid with skills */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
        {skills.map((group) => (
          <div
            key={group.category}
            className="group border border-gray-200 dark:border-gray-700 rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            {/* category & icon */}
            <div className="flex flex-col items-center gap-3 mb-4">
              <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                {group.icon}
              </span>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {group.category}
              </h3>
            </div>

            {/* skill badges */}
            <div className="flex flex-wrap gap-2 transition">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-600 transition hover:text-white 700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {currentlyLearning.map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-600 transition hover:text-white 700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
    </section>
  );
}

export default Skills;
