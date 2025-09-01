const Projects = () => {
  //   const [filter, setFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order processing capabilities.",
      image: "🛒",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
      ],
      category: "Full Stack",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/username/project",
      featured: true,
    },
    {
      id: 2,
      title: "Weather Forecast App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics using OpenWeather API.",
      image: "🌤️",
      technologies: ["React", "JavaScript", "CSS3", "Weather API"],
      category: "Frontend",
      demoUrl: "https://weather-demo.example.com",
      githubUrl: "https://github.com/username/weather-app",
      featured: false,
    },
    {
      id: 3,
      title: "Task Management API",
      description:
        "RESTful API for task management with user authentication, real-time updates, and comprehensive documentation built with Express.js.",
      image: "📋",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
      category: "Backend",
      demoUrl: "https://api-docs.example.com",
      githubUrl: "https://github.com/username/task-api",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects and skills with modern design, dark mode, and smooth animations.",
      image: "💼",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      demoUrl: "https://portfolio.example.com",
      githubUrl: "https://github.com/username/portfolio",
      featured: true,
    },
  ];
};

export default Projects;
