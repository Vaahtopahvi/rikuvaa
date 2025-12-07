export const projects = [
  {
    id: 1,
    title: "Portfolio site",
    description:
      "Welcome to my personal website where I showcase my skills, work experience and personal projects that I have created. I really hope you enjoy exploring it as much as I loved creating it!",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Lucide-icons",
    ],
    category: "Frontend",
    demoUrl: "https://vaahtopahvi.github.io/rikuvaa/",
    githubUrl: "https://github.com/vaahtopahvi/rikuvaa",
    featured: true,
    hasDemo: true,
  },
  {
    id: 2,
    title: "Loopy Games",
    description:
      "This is a collection of video games that have left a strong impression on me, titles I’ve enjoyed so much that I’d happily recommend them to others. For each game, I note my rating, the hours I’ve spent, and a short review. This way I can remember what made them so special",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Lucide-icons",
      "MongoDB",
      "Express.js",
    ],
    category: "Full Stack",
    demoUrl: "",
    githubUrl: "https://github.com/Vaahtopahvi/loopy-games",
    featured: true,
    hasDemo: false,
  },
  {
    id: 3,
    title: "Memory Game",
    description:
      "A classic memory game with a twist: it uses the PokéAPI to fetch Pokémon sprites and names. After each click, the cards shuffle, and the goal is to select all of them without clicking on the same Pokémon to win",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "PokéAPI"],
    category: "Full stack",
    demoUrl: "",
    githubUrl: "https://github.com/Vaahtopahvi/memory-game",
    featured: false,
    hasDemo: false,
  },
  {
    id: 4,
    title: "Pokedex Sinnoh",
    description:
      "A Pokédex recreation inspired by Pokémon Shining Diamond, built mostly with HTML and CSS. Includes a search powered by the PokéAPI that pulls in real Pokémon data",
    technologies: ["HTML5", "CSS3", "JavaScript", "PokéAPI"],
    category: "Full stack",
    demoUrl: "",
    githubUrl: "https://github.com/Vaahtopahvi/pokedex_sinnoh",
    featured: false,
    hasDemo: false,
  },
  {
    id: 5,
    title: "Game Cards",
    description:
      "Another gaming-inspired project, because those get me the most excited! This one features a fun hover effect: cards stack neatly until you interact with them",
    technologies: ["React", "Javascript", "Tailwind CSS", "Node.js"],
    category: "Frontend",
    demoUrl: "",
    githubUrl: "https://github.com/Vaahtopahvi/game-cards",
    featured: true,
    hasDemo: false,
  },
];

// maybe at some point filter by category
// muista vaihtaa Portfolion demo linkki oikeeseen