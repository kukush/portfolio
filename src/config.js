const config = {
  hero: {
    name: "Jane Doe",
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
    bio: "Building scalable web applications and distributed systems with 6+ years of experience.",
    status: {
      available: true,
      text: "Available for hire"
    }
  },

  about:
    "I'm a senior software engineer with 6+ years of experience building scalable web applications and distributed systems. I care deeply about clean architecture, developer experience, and shipping products that solve real problems. Currently focused on React ecosystems and cloud-native infrastructure.",

  skills: [
    "JavaScript",
    "TypeScript", 
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
    "REST APIs",
    "GraphQL",
    "CI/CD",
    "Linux"
  ],

  experience: [
    {
      role: "Senior Software Engineer",
      company: "Acme Corp",
      period: "2022 – Present",
      location: "San Francisco, CA",
      type: "Full-time",
      highlights: [
        "Led migration of monolithic API to microservices, reducing deploy times by 70%.",
        "Designed and implemented real-time notification system serving 50k+ users.",
        "Mentored a team of 4 junior engineers through code reviews and pair programming."
      ]
    },
    {
      role: "Software Engineer",
      company: "StartupXYZ",
      period: "2019 – 2022", 
      location: "New York, NY",
      type: "Full-time",
      highlights: [
        "Built customer-facing dashboard with React, reducing support tickets by 40%.",
        "Implemented automated testing pipeline achieving 90% code coverage.",
        "Optimized database queries, improving API response times by 3x."
      ]
    },
    {
      role: "Junior Developer",
      company: "WebAgency",
      period: "2017 – 2019",
      location: "Austin, TX", 
      type: "Full-time",
      highlights: [
        "Developed responsive web applications for 10+ client projects.",
        "Introduced component-based architecture to the team's workflow."
      ]
    }
  ],

  projects: [
    {
      name: "TaskFlow",
      description: "A lightweight project management tool built with React and Node.js. Features real-time collaboration, Kanban boards, and automated workflows.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      link: "https://github.com/janedoe/taskflow",
      featured: true
    },
    {
      name: "DataPipe", 
      description: "CLI tool for transforming and migrating data between databases. Supports PostgreSQL, MongoDB, and SQLite with streaming for large datasets.",
      technologies: ["Python", "Click", "SQLAlchemy"],
      link: "https://github.com/janedoe/datapipe",
      featured: true
    },
    {
      name: "DevLog",
      description: "Minimal blogging platform for developers. Markdown-based with syntax highlighting, RSS feed, and zero client-side JavaScript.",
      technologies: ["Go", "Hugo", "RSS"],
      link: "https://github.com/janedoe/devlog", 
      featured: true
    }
  ],

  contact: {
    email: "jane@example.com",
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe"
  }
};

export default config;
