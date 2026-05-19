const config = {
  hero: {
    name: import.meta.env.VITE_HERO_NAME || "Tesfaye Alemu Getahun",
    title: import.meta.env.VITE_HERO_TITLE || "Senior Software Engineer || Software and Platform Architecture",
    location: import.meta.env.VITE_HERO_LOCATION || "Ethiopia , Addis Abeba",
    image: "/pic.jpeg",
    bio: import.meta.env.VITE_HERO_BIO || "Software Architect with 10+ years of experience building scalable digital systems across Ethiopia and Europe. Focused on innovation, reliable technology, and creating impactful solutions for Africa.",
    keywords: [
      "Distributed Systems",
      "Cloud Architecture",
      "Backend Engineering",
      "Startup Innovation"
    ],
    status: {
      available: import.meta.env.VITE_HERO_STATUS_AVAILABLE === "true",
      text: import.meta.env.VITE_HERO_STATUS_TEXT || "Available"
    }
  },

  about: import.meta.env.VITE_ABOUT_TEXT || "With more than 10 years of experience in software engineering and architecture, I design scalable systems and digital products built for reliability, growth, and long-term impact.\n\nHaving worked across Ethiopia and Europe, I bring an international perspective to problem-solving—combining strong technical foundations with practical execution and modern system design.\n\nMy expertise includes distributed systems, cloud architecture, backend engineering, and scalable platform development. I'm currently focused on innovation, startup development, and building technology solutions that create real value across Africa.\n\nI'm also interested in collaborating with startups, tech hubs, and ambitious builders working on meaningful and impactful products.",

  skills: {
    title: import.meta.env.VITE_SKILLS_TITLE || "Technical Skills",
    subtitle: import.meta.env.VITE_SKILLS_SUBTITLE || "Comprehensive expertise across modern development stack with focus on scalable web applications and DevOps practices.",
    categories: [
      {
        name: "Programming Languages",
        icon: "< />",
        skills: ["JavaScript", "TypeScript", "SQL", "PHP", "HCL"]
      },
      {
        name: "DevOps & Tools",
        icon: "⚙",
        skills: ["Docker", "Git", "VIM", "NeoVim", "Kubernetes", "Agile", "CI/CD with Jenkins", "Terraform"]
      },
      {
        name: "JavaScript Libraries & Frameworks",
        icon: "🌐",
        skills: ["Node.js", "React.js", "Bun.js", "Deno", "Vanilla JS", "Next.js"]
      },
      {
        name: "Web Frameworks",
        icon: "🗄",
        skills: ["Express.js", "Fastify"]
      },
      {
        name: "Backend as a Service",
        icon: "☁",
        skills: ["Firebase", "Appwrite"]
      },
      {
        name: "Testing",
        icon: "⚠",
        skills: ["Jest"]
      }
    ]
  },

  experience: [
    {
      role: "Senior Software Engineer",
      company: "Acme Corp",
      period: "2022 – Present",
      location: "San Francisco, CA",
      type: "Full-time",
      technologies: ["React", "Node.js", "TypeScript", "Docker", "AWS", "MongoDB"],
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
      technologies: ["React", "JavaScript", "Python", "PostgreSQL", "Redis", "Jest"],
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
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
      highlights: [
        "Developed responsive web applications for 10+ client projects.",
        "Introduced component-based architecture to the team's workflow."
      ]
    }
  ],

  projects: [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with Next.js and Node.js. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
      codeLink: "https://github.com/kukush/e-commerce-platform",
      demoLink: "https://e-commerce-demo.vercel.app",
      featured: true
    },
    {
      name: "DevOps Automation Suite",
      description: "Comprehensive CI/CD pipeline automation using Jenkins, Docker, and Kubernetes. Reduced deployment time by 70% and improved system reliability.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform", "AWS"],
      codeLink: "https://github.com/kukush/devops-automation",
      demoLink: "https://devops-demo.vercel.app",
      featured: true
    },
    {
      name: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization using React and Firebase. Handles thousands of concurrent users with live updates.",
      technologies: ["React", "Firebase", "Chart.js", "WebSocket", "TypeScript"],
      codeLink: "https://github.com/kukush/analytics-dashboard",
      demoLink: "https://analytics-demo.vercel.app",
      featured: true
    }
  ],

  education: [
    {
      degree: "M.Sc., Computer Engineering",
      field: "Software and Digital Systems",
      institution: "Politecnico di Torino",
      period: "Sep 2014 – Sep 2018",
      thesis: {
        title: "Analysis and Processing of Information Transmitted by Vessels",
        link: "https://webthesis.biblio.polito.it/8456/1/tesi.pdf",
        keyword: "AIS",
        keywordLink: "https://www.google.com/search?q=Automatic+Identification+System"
      }
    }
  ],

  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || "getahuneandh@gmail.com",
    github: import.meta.env.VITE_CONTACT_GITHUB || "https://github.com/kukush",
    linkedin: import.meta.env.VITE_CONTACT_LINKEDIN || "https://www.linkedin.com/in/getahun-tesfaye-alemu-bb715136/"
  }
};

export default config;
