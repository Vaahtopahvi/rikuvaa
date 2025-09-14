import { experiences } from "../data/experience";
import { Calendar, MapPin } from "lucide-react";
import { useState } from "react";

function Experience() {
  const [activeTab, setActiveTab] = useState<"highlights" | "timeline">(
    "highlights"
  );

  // Filter experiences for highlights based on highlight boolean
  const highlightedExperiences = experiences.filter((exp) => exp.highlight);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Freelance":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Education":
        return "bg-[oklch(0.9_0.02_203.9)] text-[oklch(0.3943_0.0647_203.9)] dark:bg-[oklch(0.2_0.05_203.9)] dark:text-[oklch(0.6_0.0647_203.9)]";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const renderTimeline = (experiencesList: typeof experiences) => {
    return (
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

        {/* Experience items */}
        <div className="space-y-8">
          {experiencesList.map((exp, index) => (
            <div
              key={`${exp.role}-${exp.company}-${index}`}
              className="relative flex items-start animate-fade-in-up"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-[oklch(0.3943_0.0647_203.9)] dark:bg-[oklch(0.3943_0.0647_203.9)] rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

              {/* Experience card */}
              <div className="ml-16 flex-1">
                <div className="experience-card border border-gray-200 dark:border-gray-700 rounded-xl shadow p-6 hover:shadow-lg transition">
                  {/* Type label */}
                  <div className="flex justify-end mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                        exp.type
                      )}`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Role and company */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-[oklch(0.9422_0.011_211.04)] mb-1">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      className="text-[oklch(0.3943_0.0647_203.9)] dark:text-[oklch(0.4800_0.0647_203.9)] text-lg hover:underline font-medium"
                    >
                      {exp.company}
                    </a>
                  </div>

                  {/* Date and location */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => {
                      // Define programming languages and tools that should be highlighted
                      const programmingKeywords = [
                        "javascript",
                        "python",
                        "java",
                        "typescript",
                        "react",
                        "node.js",
                        "html",
                        "css",
                        "tailwindcss",
                        "html5",
                        "css3",
                        "git",
                        "github",
                        "unix",
                        "linux",
                        "sql",
                      ];

                      const isProgrammingSkill = programmingKeywords.some(
                        (keyword) =>
                          skill.toLowerCase().includes(keyword.toLowerCase())
                      );

                      return (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            isProgrammingSkill
                              ? "bg-orange-100 dark:bg-orange-900/40 text-orange-900 dark:text-orange-200"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 px-4 w-full experience-bg">
      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("highlights")}
              className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded-md font-medium transition-colors text-sm sm:text-base ${
                activeTab === "highlights"
                  ? "bg-[oklch(0.3943_0.0647_203.9)] dark:bg-[oklch(0.3943_0.0647_203.9)] text-white dark:text-[oklch(0.9422_0.011_211.04)] shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-[oklch(0.9422_0.011_211.04)]"
              }`}
            >
              Highlights
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded-md font-medium transition-colors text-sm sm:text-base ${
                activeTab === "timeline"
                  ? "bg-[oklch(0.3943_0.0647_203.9)] dark:bg-[oklch(0.3943_0.0647_203.9)] text-white dark:text-[oklch(0.9422_0.011_211.04)] shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-[oklch(0.9422_0.011_211.04)]"
              }`}
            >
              Timeline
            </button>
          </div>
        </div>

        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-4xl dark:text-[oklch(0.9422_0.011_211.04)]">
            {activeTab === "highlights"
              ? "Professional Highlights"
              : "Full Timeline"}
          </h2>
        </div>

        {/* Timeline Content */}
        <div key={activeTab}>
          {renderTimeline(
            activeTab === "highlights" ? highlightedExperiences : experiences
          )}
        </div>

        {/* Footer message */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            More experiences to be added as I continue my professional journey!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
