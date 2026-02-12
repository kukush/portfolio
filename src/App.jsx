import config from "./config";

function App() {
  const { hero, about, skills, experience, projects, contact } = config;

  return (
    <div className="container">
      <section className="hero">
        <h1>{hero.name}</h1>
        <div className="title">{hero.title}</div>
        <div className="location">{hero.location}</div>
      </section>

      <section className="about">
        <h2 className="section-heading">About</h2>
        <p>{about}</p>
      </section>

      <section className="skills">
        <h2 className="section-heading">Skills</h2>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill} className="skill-badge">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="experience">
        <h2 className="section-heading">Experience</h2>
        {experience.map((job) => (
          <div key={`${job.company}-${job.period}`} className="experience-item">
            <div className="experience-header">
              <div className="role">{job.role}</div>
              <div className="company">{job.company}</div>
              <div className="period">{job.period}</div>
            </div>
            <ul className="experience-highlights">
              {job.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="projects">
        <h2 className="section-heading">Projects</h2>
        {projects.map((project) => (
          <div key={project.name} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </section>

      <section className="contact">
        <h2 className="section-heading">Contact</h2>
        <ul className="contact-list">
          <li>
            <span className="label">Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <span className="label">GitHub</span>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              {contact.github.replace("https://", "")}
            </a>
          </li>
          <li>
            <span className="label">LinkedIn</span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedin.replace("https://", "")}
            </a>
          </li>
        </ul>
      </section>

      <footer>
        © {new Date().getFullYear()} {hero.name}
      </footer>
    </div>
  );
}

export default App;
