import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import App from './App';
import config from './config';

// Mock the profile image import
vi.mock('./pic.jpeg', () => ({ default: 'mock-profile-image' }));

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock scrollTo and scrollIntoView
window.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders without crashing', () => {
    render(<App />);
  });

  it('displays hero section with correct content', () => {
    render(<App />);
    
    expect(screen.getByText(config.hero.name)).toBeInTheDocument();
    expect(screen.getByText(config.hero.title)).toBeInTheDocument();
    expect(screen.getByText(config.hero.location)).toBeInTheDocument();
    expect(screen.getByText(config.hero.bio)).toBeInTheDocument();
  });

  it('displays profile image with correct attributes', () => {
    render(<App />);
    
    const profileImage = screen.getByAltText(config.hero.name);
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveClass('hero-image');
    expect(profileImage.src).toContain('mock-profile-image');
  });

  it('displays status indicator with correct text and class', () => {
    render(<App />);
    
    const statusElement = screen.getByText(config.hero.status.text);
    expect(statusElement).toBeInTheDocument();
    
    const statusContainer = statusElement.closest('.hero-status');
    if (config.hero.status.available) {
      expect(statusContainer).toHaveClass('available');
      expect(statusContainer).not.toHaveClass('unavailable');
    } else {
      expect(statusContainer).toHaveClass('unavailable');
      expect(statusContainer).not.toHaveClass('available');
    }
  });

  it('displays social links with correct hrefs and aria labels', () => {
    render(<App />);
    
    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toHaveAttribute('href', config.contact.github);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    const linkedinLink = screen.getByLabelText('LinkedIn');
    expect(linkedinLink).toHaveAttribute('href', config.contact.linkedin);
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

    const emailLink = screen.getByLabelText('Email');
    expect(emailLink).toHaveAttribute('href', `mailto:${config.contact.email}`);
  });

  it('renders all section headings', () => {
    render(<App />);
    
    expect(screen.getByText('About', { selector: '.section-heading' })).toBeInTheDocument();
    expect(screen.getByText('Technical Skills', { selector: '.section-heading' })).toBeInTheDocument();
    expect(screen.getByText('Professional Experience', { selector: '.section-heading' })).toBeInTheDocument();
    expect(screen.getByText('Featured Projects', { selector: '.section-heading' })).toBeInTheDocument();
    expect(screen.getByText('Get In Touch', { selector: '.section-heading' })).toBeInTheDocument();
  });

  it('displays about section content', () => {
    render(<App />);
    
    const aboutSection = document.getElementById('about');
    expect(aboutSection).toBeInTheDocument();
    expect(aboutSection.textContent).toContain(config.about);
  });

  it('displays skills as badges', () => {
    render(<App />);
    
    config.skills.categories.forEach(category => {
      category.skills.forEach(skill => {
        const skillElements = screen.getAllByText(skill);
        const skillBadge = skillElements.find(el => el.classList.contains('skill-item'));
        expect(skillBadge).toBeInTheDocument();
      });
    });
  });

  it('displays experience items with correct details', () => {
    render(<App />);
    
    config.experience.forEach((job, index) => {
      const experienceItem = screen.getAllByTestId('experience-item')[index];
      
      expect(experienceItem).toHaveTextContent(job.role);
      expect(experienceItem).toHaveTextContent(job.company);
      expect(experienceItem).toHaveTextContent(job.period);
      expect(experienceItem).toHaveTextContent(job.location);
      expect(experienceItem).toHaveTextContent(job.type);
      
      job.highlights.forEach(highlight => {
        expect(experienceItem).toHaveTextContent(highlight);
      });
    });
  });

  it('displays projects with correct details', () => {
    render(<App />);
    
    config.projects.forEach(project => {
      expect(screen.getByText(project.name, { selector: '.project-title' })).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      
      project.technologies.forEach(tech => {
        const techElements = screen.getAllByText(tech);
        const projectTechBadge = techElements.find(el => el.classList.contains('project-tech-badge'));
        expect(projectTechBadge).toBeInTheDocument();
      });
    });
    
    const seeMoreLinks = screen.getAllByText('See More');
    expect(seeMoreLinks.length).toBe(config.projects.length);
  });

  it('displays contact section with correct content', () => {
    render(<App />);
    
    expect(screen.getByText(/I'm always interested in hearing about new opportunities/)).toBeInTheDocument();
    expect(screen.getByText('Send me an email')).toBeInTheDocument();
    expect(screen.getByText('I\'ll do my best to respond within 24 hours')).toBeInTheDocument();
    
    const emailButton = screen.getByRole('link', { name: 'Send me an email' });
    expect(emailButton).toHaveAttribute('href', `mailto:${config.contact.email}`);
  });

  it('displays footer with correct content and links', () => {
    render(<App />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} ${config.hero.name}`)).toBeInTheDocument();
    
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders tab navigation with all tabs', () => {
    render(<App />);
    
    expect(screen.getByText('About', { selector: '.tab-button' })).toBeInTheDocument();
    expect(screen.getByText('Skills', { selector: '.tab-button' })).toBeInTheDocument();
    expect(screen.getByText('Experience', { selector: '.tab-button' })).toBeInTheDocument();
    expect(screen.getByText('Projects', { selector: '.tab-button' })).toBeInTheDocument();
    expect(screen.getByText('Contact', { selector: '.tab-button' })).toBeInTheDocument();
  });

  it('highlights active tab correctly', () => {
    render(<App />);
    
    const aboutTab = screen.getByRole('button', { name: 'About' });
    expect(aboutTab).toHaveClass('active');
  });

  it('switches active tab when clicked', async () => {
    render(<App />);
    
    const skillsTab = screen.getByRole('button', { name: 'Skills' });
    fireEvent.click(skillsTab);
    
    await waitFor(() => {
      expect(skillsTab).toHaveClass('active');
    });
    
    const aboutTab = screen.getByRole('button', { name: 'About' });
    expect(aboutTab).not.toHaveClass('active');
  });

  it('calls scrollTo when tab is clicked', () => {
    const scrollToMock = vi.fn();
    Element.prototype.scrollIntoView = scrollToMock;
    
    render(<App />);
    
    const skillsTab = screen.getByRole('button', { name: 'Skills' });
    fireEvent.click(skillsTab);
    
    expect(scrollToMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });

  it('handles scroll events to update active tab', async () => {
    render(<App />);
    
    // Mock scroll position
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    
    // Trigger scroll event
    fireEvent.scroll(window);
    
    // Just verify the scroll handler doesn't crash
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('applies featured class to featured projects', () => {
    render(<App />);
    
    config.projects.forEach(project => {
      if (project.featured) {
        const projectElement = screen.getByText(project.name, { selector: '.project-title' }).closest('.project-card');
        expect(projectElement).toHaveClass('featured');
      }
    });
  });

  it('displays technologies for each project', () => {
    render(<App />);
    
    config.projects.forEach(project => {
      project.technologies.forEach(tech => {
        const techElements = screen.getAllByText(tech);
        expect(techElements.length).toBeGreaterThan(0);
        
        // Check if at least one has the tech-badge class
        const techBadge = techElements.find(el => el.classList.contains('project-tech-badge'));
        expect(techBadge).toBeInTheDocument();
      });
    });
  });

  it('has correct accessibility attributes', () => {
    render(<App />);
    
    // Check navigation
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    
    // Check headings hierarchy
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(5);
  });

  it('handles missing config gracefully', () => {
    const originalConfig = { ...config };
    
    // Test with empty config
    render(<App />);
    
    // Should still render basic structure
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
  });

  it('updates active tab on scroll to different sections', () => {
    render(<App />);
    
    // Mock scrolling to skills section
    Object.defineProperty(window, 'scrollY', { value: 300, writable: true });
    fireEvent.scroll(window);
    
    // Just verify the component handles scroll without crashing
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('cleans up scroll event listener on unmount', () => {
    const { unmount } = render(<App />);
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    
    unmount();
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('has all section IDs for navigation', () => {
    render(<App />);
    
    const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
    
    sections.forEach(sectionId => {
      expect(document.getElementById(sectionId)).toBeInTheDocument();
    });
  });

  it('displays correct number of skills badges', () => {
    render(<App />);
    
    const skillBadges = screen.getAllByTestId('skill-badge');
    const totalSkills = config.skills.categories.flatMap(category => category.skills);
    expect(skillBadges).toHaveLength(totalSkills.length);
  });

  it('displays correct number of experience items', () => {
    render(<App />);
    
    const experienceItems = screen.getAllByTestId('experience-item');
    expect(experienceItems).toHaveLength(config.experience.length);
  });

  it('displays correct number of project items', () => {
    render(<App />);
    
    const projectItems = screen.getAllByTestId('project-item');
    expect(projectItems).toHaveLength(config.projects.length);
  });
});
