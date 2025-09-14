import { skills, currentlyLearning } from "../data/skills";
import { Palette, Cog, Wrench, Handshake } from "lucide-react";

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-bold text-4xl dark:text-[oklch(0.9422_0.011_211.04)]">
          Tech & Skills
        </h2>
        <p className="text-xl sm:text-xl text-gray-500 dark:text-gray-400">
          Here's the technologies and skills I work with to make it all come
          together
        </p>
      </div>

      {/* grid with skills */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
        {skills.map((group) => (
          <div
            key={group.category}
            className="group border border-[oklch(0.6826_0.2125_40.11)] rounded-xl shadow p-6 hover:shadow-lg transition project-card"
          >
            {/* category & icon */}
            <div className="flex flex-col items-center gap-3 mb-4">
              <span className="transition-transform duration-300 group-hover:scale-110">
                {(() => {
                  switch (group.category) {
                    case "Frontend":
                      return (
                        <Palette
                          size={40}
                          className="text-[oklch(0.6826_0.2125_40.11)]"
                        />
                      );
                    case "Backend":
                      return (
                        <Cog
                          size={40}
                          className="text-[oklch(0.6826_0.2125_40.11)]"
                        />
                      );
                    case "Tools & DevOps":
                      return (
                        <Wrench
                          size={40}
                          className="text-[oklch(0.6826_0.2125_40.11)]"
                        />
                      );
                    case "Soft Skills":
                      return (
                        <Handshake
                          size={40}
                          className="text-[oklch(0.6826_0.2125_40.11)]"
                        />
                      );
                    default:
                      return (
                        <Palette
                          size={40}
                          className="text-[oklch(0.6826_0.2125_40.11)]"
                        />
                      );
                  }
                })()}
              </span>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-[oklch(0.9422_0.011_211.04)]">
                {group.category}
              </h3>
            </div>

            {/* skill badges */}
            <div className="flex flex-wrap gap-2 transition">
              {group.items.map((skill) => {
                const categoryColor =
                  "bg-[oklch(0.9_0.05_40.11)] dark:bg-[oklch(0.2_0.05_40.11)] text-[oklch(0.6826_0.2125_40.11)] hover:bg-[oklch(0.6826_0.2125_40.11)] hover:text-white";
                return (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition ${categoryColor}`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6 text-center">Grinding On</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {currentlyLearning.map((item) => (
            <span
              key={item}
              className="px-4 py-2 border border-[oklch(0.6826_0.2125_40.11)] text-[oklch(0.6826_0.2125_40.11)] rounded-full text-sm font-medium hover:bg-[oklch(0.6826_0.2125_40.11)] transition hover:text-white"
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
