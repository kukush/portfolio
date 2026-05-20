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
    subtitle: import.meta.env.VITE_SKILLS_SUBTITLE || " Comprehensive expertise in distributed systems, cloud-native architecture, backend engineering, IIoT platforms, CI/CD automation, and microservices. Proven track record of architecting reliable, scalable, and business-driven software solutions.",
    categories: [
      {
        name: "Programming Languages",
        icon: "< />",
        skills: ["Java", "TypeScript", "Kotlin", "C#", "Node","Shell", "Python","Ruby"]
      },
      {
        name: "DevOps & Cloud Tools",
        icon: "⚙",
        skills: ["Docker", "Git", "VIM", "AWS", "Kubernetes", "Agile", "CI/CD with Jenkins", "Terraform"]
      },
      {
        name: "Libraries & Frameworks",
        icon: "🌐",
        skills: ["Node.js", "React.js", "Vanilla JS", "Next.js","Hibernate","Spring", "Apache","Ruby on Rails"]
      },
      {
        name: "Databases & Storage:",
        icon: "🗄",
        skills: ["Postgres", "Mongo","Redis", "SQL","Dynamo"]
      },
      {
        name: "Backend as a Service || Engineering ",
        icon: "☁",
        skills: ["Firebase", "Supabase", "REST", "Microservices","DDD || EDA","Serverless","AI-Native"]
      },
      {
        name: "Testing",
        icon: "⚠",
        skills: ["Jest","JUnit","Playwright", "Cypress","Postman","Appium"]
      }
    ]
  },

  experience: [
    {
      role: "Founder & Product Engineer",
      company: "StartUp stage",
      period: "since April 2026",
      location: "Addis Ababa, Ethiopia", 
      type:  "Full-time",
      technologies: ["AI","Innovation", "Startup"],
      highlights: [
             "Privacy-focused, offline-first financial and telecom asset management application designed for the Ethiopian market. It helps users track their mobile balances, data packages, and financial transactions by automatically parsing SMS messages from telecom providers and banks.",
             "AI-powered real-time urban theft detection and response platform with extensible hardware abstraction."

      ]
    },
    {
      role: "Senior Software Engineer Full Stack.",
      company: "Upwork",
      period: "Nov2025 – Jan2026",
      location: "Remote",
      type: "Freelance",
      technologies: ["React", "Node.js", "TypeScript", "Docker", "AWS", "MongoDB"],
      highlights: [
        "Led migration of monolithic API to microservices, reducing deploy times by 70%.",
        "Software and Platform Architectire.",
        "User Experiance(UX).",
        "Mentored a team of 4 junior engineers through code reviews and pair programming."
      ]
    },
    {
      role: "Software Engineer| Architect",
      company: "Endress+Hauser Group",
      period: "2018 – 2025", 
      location: "Freiburg, Germany",
      type: "Full-time",
      technologies: ["Ruby on Rails","Java", "JavaScript-React", "Type", "PostgreSQL", "Node", "Jest","AWS","Docker"],
      highlights: [
        "Delivered successful industrial IoT projects with real-time data processing and device integration.",
        "modernized legacy systems into microservices and cloud-based architectures to enhance performance",
        "Defined and enforced architecture standards and coding guidelines across teams.",
        "Conducted architecture and code reviews while mentoring junior engineers to ensure reliability",
        "Implemented automated testing pipeline achieving 96% code coverage.",
        "Optimized database queries, improving API response times by 3x."
      ]
    },
    {
      role: "Software Engineer intern",
      company: "Market Logic Software",
      period: "Aug. 2017 – Jan. 2018",
      location: "Berlin, Germany", 
      type: "Full-time/Internship",
      technologies: ["Gulp","React", "Redux",  "Node.js", "WebPack", "JavaScript", "MySQL"],
      highlights: [
        "Developed multi-level Java web applications for enterprise use, enhancing functionality.",
        "Integrated third-party services to expand software product capabilities.",
        "Conducted rigorous testing to ensure minimal bugs upon deployment.",
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Goo.com Srl ",
      period: "June 2017 – Jan. 2019",
      location: "Milan, Italy", 
      type: "Full-time",
      technologies: ["Java/J2EE,","Java Spring", "jQuery", "Bootstrap", "JavaScript"],
      highlights: [
        "Full-stack role, backend, API and frontend.",
        "Design and develop a multi-level java web application.",

      ]
    },
    {
      role: "System Engineer",
      company: "Information Network Security Agency (INSA)",
      period: "Sep. 2010 – Aug. 2013",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      technologies: ["C", "C#", , "HTML"],
      highlights: [
        "Designed algorithms and developed software for embedded applications and Human/Machine Interfaces.",
        "Integrated third-party services to expand software product capabilities.",
        "Developed software applications using advanced object- oriented programming techniques",
        "Produced technical design documentation and detailed program specifications",
        "Maintained industry knowledge through continuous learning, applying relevant trends effectively",
        "GCS development"
      ]
    },
    {
      role: "Software developer",
      company: "Cyber Soft plc",
      period: "June 2008 – July 2010",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      technologies: ["C#", "HTML", "CSS", "SQL"],
      highlights: [
        "Software analysis,design,development,and testing across multiple projects.",
        "Technical design document sand programme specifications for systems and databases.",
        "Requirement analysis documentation to support system design initiatives.",
        "Software programming within integrated supply chain solutions.",
        "Identified and rectified programming errors through comprehensive testing."
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
      degree: "Computer Engineering(MSC)",
      field: "Software and Digital Systems ",
      institution: "Politecnico di Torino-Italy -2018",
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
