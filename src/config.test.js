import { describe, it, expect } from 'vitest';
import config from './config';

describe('Configuration', () => {
  it('has correct hero configuration structure', () => {
    expect(config.hero).toBeDefined();
    expect(typeof config.hero.name).toBe('string');
    expect(typeof config.hero.title).toBe('string');
    expect(typeof config.hero.location).toBe('string');
    expect(typeof config.hero.bio).toBe('string');
    expect(typeof config.hero.status).toBe('object');
  });

  it('has valid hero status configuration', () => {
    expect(config.hero.status).toBeDefined();
    expect(typeof config.hero.status.available).toBe('boolean');
    expect(typeof config.hero.status.text).toBe('string');
  });

  it('has valid about section', () => {
    expect(config.about).toBeDefined();
    expect(typeof config.about).toBe('string');
    expect(config.about.length).toBeGreaterThan(0);
  });

  it('has valid skills array', () => {
    expect(Array.isArray(config.skills)).toBe(true);
    expect(config.skills.length).toBeGreaterThan(0);
    
    config.skills.forEach(skill => {
      expect(typeof skill).toBe('string');
      expect(skill.length).toBeGreaterThan(0);
    });
  });

  it('has valid experience array', () => {
    expect(Array.isArray(config.experience)).toBe(true);
    expect(config.experience.length).toBeGreaterThan(0);
    
    config.experience.forEach(job => {
      expect(typeof job.role).toBe('string');
      expect(typeof job.company).toBe('string');
      expect(typeof job.period).toBe('string');
      expect(typeof job.location).toBe('string');
      expect(typeof job.type).toBe('string');
      expect(Array.isArray(job.highlights)).toBe(true);
      
      job.highlights.forEach(highlight => {
        expect(typeof highlight).toBe('string');
        expect(highlight.length).toBeGreaterThan(0);
      });
    });
  });

  it('has valid projects array', () => {
    expect(Array.isArray(config.projects)).toBe(true);
    expect(config.projects.length).toBeGreaterThan(0);
    
    config.projects.forEach(project => {
      expect(typeof project.name).toBe('string');
      expect(typeof project.description).toBe('string');
      expect(typeof project.link).toBe('string');
      expect(Array.isArray(project.technologies)).toBe(true);
      expect(typeof project.featured).toBe('boolean');
      
      project.technologies.forEach(tech => {
        expect(typeof tech).toBe('string');
        expect(tech.length).toBeGreaterThan(0);
      });
    });
  });

  it('has valid contact configuration', () => {
    expect(config.contact).toBeDefined();
    expect(typeof config.contact.email).toBe('string');
    expect(typeof config.contact.github).toBe('string');
    expect(typeof config.contact.linkedin).toBe('string');
    
    // Validate email format
    expect(config.contact.email).toContain('@');
    expect(config.contact.email).toContain('.');
    
    // Validate URLs
    expect(config.contact.github).toMatch(/^https?:\/\/.+/);
    expect(config.contact.linkedin).toMatch(/^https?:\/\/.+/);
  });

  it('has no empty required fields', () => {
    expect(config.hero.name.trim().length).toBeGreaterThan(0);
    expect(config.hero.title.trim().length).toBeGreaterThan(0);
    expect(config.hero.location.trim().length).toBeGreaterThan(0);
    expect(config.hero.bio.trim().length).toBeGreaterThan(0);
    expect(config.about.trim().length).toBeGreaterThan(0);
    expect(config.contact.email.trim().length).toBeGreaterThan(0);
    expect(config.contact.github.trim().length).toBeGreaterThan(0);
    expect(config.contact.linkedin.trim().length).toBeGreaterThan(0);
  });

  it('has at least one skill', () => {
    expect(config.skills.length).toBeGreaterThan(0);
  });

  it('has at least one experience item', () => {
    expect(config.experience.length).toBeGreaterThan(0);
  });

  it('has at least one project', () => {
    expect(config.projects.length).toBeGreaterThan(0);
  });

  it('has featured projects', () => {
    const featuredProjects = config.projects.filter(p => p.featured);
    expect(featuredProjects.length).toBeGreaterThan(0);
  });

  it('has valid project technologies', () => {
    config.projects.forEach(project => {
      expect(project.technologies.length).toBeGreaterThan(0);
    });
  });

  it('has valid experience descriptions', () => {
    config.experience.forEach(job => {
      expect(job.highlights.length).toBeGreaterThan(0);
    });
  });

  it('has consistent data types', () => {
    // All string fields should be strings
    expect(typeof config.hero.name).toBe('string');
    expect(typeof config.hero.title).toBe('string');
    expect(typeof config.hero.location).toBe('string');
    expect(typeof config.hero.bio).toBe('string');
    expect(typeof config.about).toBe('string');
    
    // All boolean fields should be booleans
    expect(typeof config.hero.status.available).toBe('boolean');
    
    config.projects.forEach(project => {
      expect(typeof project.featured).toBe('boolean');
    });
  });

  it('has valid URLs in projects', () => {
    config.projects.forEach(project => {
      expect(project.link).toMatch(/^https?:\/\/.+/);
    });
  });

  it('has no duplicate skills', () => {
    const uniqueSkills = [...new Set(config.skills)];
    expect(uniqueSkills.length).toBe(config.skills.length);
  });

  it('has no duplicate project names', () => {
    const uniqueProjectNames = [...new Set(config.projects.map(p => p.name))];
    expect(uniqueProjectNames.length).toBe(config.projects.length);
  });

  it('has no duplicate companies in experience', () => {
    const uniqueCompanies = [...new Set(config.experience.map(e => e.company))];
    expect(uniqueCompanies.length).toBe(config.experience.length);
  });
});
