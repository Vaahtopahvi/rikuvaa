import { projects } from "../data/projects";
import {
  ExternalLink,
  Github,
  Eye,
  FolderHeart,
  Brain,
  Focus,
  Layers,
  FileBadge,
} from "lucide-react";

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-bold text-4xl dark:text-[oklch(0.9422_0.011_211.04)]">
          Personal Projects
        </h2>
        <p className="text-xl sm:text-xl text-gray-500 dark:text-gray-400">
          Some of my projects that I can confidently showcase here
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-[oklch(0.6826_0.2125_40.11)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group project-card"
          >
            {/* header + icon + featured badge */}
            <div className="flex justify-between items-start mb-4">
              <span className="transition-transform duration-300 group-hover:scale-110">
                {(() => {
                  switch (project.id) {
                    case 1:
                      return (
                        <FileBadge
                          size={40}
                          className="text-[oklch(0.6826_0.2125_40.11)]"
                        />
                      );
                    case 2:
                      return (
                        <FolderHeart
                          size={40}
                          className="text-[oklch(0.6826_0.2125_40.11)]"
                        />
                      );
                    case 3:
                      return (
                        <Brain
                          size={40}
                          className="text-[oklch(0.6826_0.2125_40.11)]"
                        />
                      );
                    case 4:
                      return (
                        <Focus
                          size={40}
                          className="text-[oklch(0.6826_0.2125_40.11)]"
                        />
                      );
                      case 5:
                        return (
                          <Layers
                            size={40}
                            className="text-[oklch(0.6826_0.2125_40.11)]"
                          />
                        );
                    default:
                      return (
                        <FolderHeart
                          size={40}
                          className="text-[oklch(0.6826_0.2125_40.11)]"
                        />
                      );
                  }
                })()}
              </span>
              {project.featured && (
                <span className="bg-[oklch(0.6826_0.2125_40.11)] text-white text-xs font-medium px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>

            {/* project title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-[oklch(0.9422_0.011_211.04)] mb-3 group-hover:text-[oklch(0.6826_0.2125_40.11)] transition-colors">
              {project.title}
            </h3>

            {/* project desc */}
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* tech badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[oklch(0.9_0.05_40.11)] dark:bg-[oklch(0.2_0.05_40.11)] text-[oklch(0.6826_0.2125_40.11)] rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* action buttons */}
            <div
              className={`flex gap-3 ${
                project.hasDemo ? "" : "justify-center"
              }`}
            >
              {project.hasDemo && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-[oklch(0.6826_0.2125_40.11)] text-[oklch(0.6826_0.2125_40.11)] rounded-lg hover:bg-[oklch(0.6826_0.2125_40.11)] hover:text-white transition-colors text-sm font-medium"
                >
                  <Eye size={16} />
                  Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener"
                className={`${
                  project.hasDemo ? "flex-1" : "w-full max-w-xs"
                } flex items-center justify-center gap-2 px-4 py-2 border border-[oklch(0.6826_0.2125_40.11)] text-[oklch(0.6826_0.2125_40.11)] rounded-lg hover:bg-[oklch(0.6826_0.2125_40.11)] hover:text-white transition-colors text-sm font-medium`}
              >
                <Github size={16} />
                Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* footer */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">
          More projects available on my GitHub profile
        </p>
        <a
          href="https://github.com/vaahtopahvi"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[oklch(0.9_0.05_40.11)] dark:bg-[oklch(0.2_0.05_40.11)] text-[oklch(0.6826_0.2125_40.11)] rounded-lg hover:bg-[oklch(0.6826_0.2125_40.11)] hover:text-white transition-colors font-medium text-sm"
        >
          <Github size={16} />
          View All Projects
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}

export default Projects;
