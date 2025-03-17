
import { useState, useRef, useEffect } from 'react';
import AnimatedText from './AnimatedText';
import GlassMorphicCard from './GlassMorphicCard';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with real-time inventory, payment processing, and responsive design.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Personal Finance Dashboard',
      description: 'A comprehensive finance tracking dashboard with data visualization, budget planning, and expense analysis.',
      tags: ['Next.js', 'TypeScript', 'Chart.js', 'Prisma'],
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'A real-time weather application with location-based forecasts, animated visualizations, and historical data.',
      tags: ['React', 'Redux', 'WeatherAPI', 'Styled Components'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <AnimatedText 
            text="Featured Projects"
            className="section-heading"
          />
          <AnimatedText 
            text="A selection of my recent work showcasing my skills and experience."
            className="section-subheading"
            delay={200}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              delay={300 + index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
  };
  delay: number;
}

const ProjectCard = ({ project, delay }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  
  // Lazy load images
  useEffect(() => {
    if (imageRef.current) {
      const img = imageRef.current;
      
      // Create an observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              img.src = project.image;
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(img);
      
      return () => {
        observer.unobserve(img);
      };
    }
  }, [project.image]);
  
  return (
    <GlassMorphicCard
      className="overflow-hidden h-full flex flex-col"
      delay={delay}
      hoverEffect={false}
    >
      <div 
        className="relative overflow-hidden rounded-lg mb-4 aspect-video"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          ref={imageRef}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out-expo"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gray-900/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex space-x-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 rounded-full p-3 transition-transform duration-300 hover:scale-110"
              aria-label="View source code on GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white rounded-full p-3 transition-transform duration-300 hover:scale-110"
              aria-label="View live project"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </GlassMorphicCard>
  );
};

export default ProjectsSection;
