import { useState, useEffect } from "react";
import config from "./config";
import profileImage from "./pic.jpeg";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const { hero, about, skills, experience, projects, contact } = config;

  const tabs = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => tab.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveTab(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <nav className="tab-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab.id);
              scrollToSection(tab.id);
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{hero.name}</h1>
            <div className="title">{hero.title}</div>
            <div className="location">{hero.location}</div>
            <div className="bio">{hero.bio}</div>
            <div className="hero-links">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hero-link" aria-label="GitHub">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hero-link" aria-label="LinkedIn">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href={`mailto:${contact.email}`} className="hero-link" aria-label="Email">
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <img src={profileImage} alt={hero.name} className="hero-image" />
            <div className={`hero-status ${hero.status.available ? 'available' : 'unavailable'}`}>
              <span className="status-dot"></span>
              {hero.status.text}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="section-heading">About</h2>
        <p>{about}</p>
      </section>

      <section id="skills" className="skills">
        <h2 className="section-heading">{skills.title}</h2>
        <p className="skills-subtitle">{skills.subtitle}</p>
        <div className="skills-grid">
          {skills.categories.map((category, index) => (
            <div key={index} className="skill-category" data-testid="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.name}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="experience">
        <h2 className="section-heading">Professional Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="experience-item" data-testid="experience-item">
            <div className="experience-header">
              <div className="experience-header-left">
                <div className="role">{job.role}</div>
                <div className="company">{job.company}</div>
              </div>
              <div className="experience-meta">
                <span className="period">{job.period}</span>
                <span className="location">{job.location}</span>
                <span className="type">{job.type}</span>
              </div>
            </div>
            <ul className="experience-description">
              {job.highlights.map((highlight, descIndex) => (
                <li key={descIndex}>{highlight}</li>
              ))}
            </ul>
            <div className="experience-technologies">
              {job.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="experience-tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="projects" className="projects">
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-description">
          A selection of projects that demonstrate my expertise in full-stack development and modern DevOps practices.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-placeholder">
                {project.name}
              </div>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="project-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link see-more">
                  See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-heading contact-heading">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="contact-cta">
            <a href={`mailto:${contact.email}`} className="contact-button">
              Send me an email
            </a>
            <p className="contact-response">I'll do my best to respond within 24 hours</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-left">
            © {new Date().getFullYear()} {hero.name}
          </div>
          <div className="footer-right">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href={`mailto:${contact.email}`} className="footer-link">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
