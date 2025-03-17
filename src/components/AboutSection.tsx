
import AnimatedText from './AnimatedText';
import GlassMorphicCard from './GlassMorphicCard';
import { Code, PenTool, Cpu, Zap } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive, accessible user interfaces with modern frameworks and tools.'
    },
    {
      icon: Cpu,
      title: 'Backend Engineering',
      description: 'Building scalable APIs and services with a focus on performance and reliability.'
    },
    {
      icon: PenTool,
      title: 'UI/UX Design',
      description: 'Designing intuitive, clean interfaces that enhance user experience.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, efficiency, and maximum user engagement.'
    }
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <AnimatedText 
            text="About Me"
            className="section-heading"
          />
          <AnimatedText 
            text="I specialize in creating modern web applications with a focus on performance, accessibility, and intuitive user experiences."
            className="section-subheading"
            delay={200}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <GlassMorphicCard delay={300}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I'm a passionate software engineer with expertise in building modern web applications. My journey in technology began with a curiosity about how digital tools shape our world, which led me to pursue a career in software development.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, I focus on creating elegant solutions to complex problems, with a particular emphasis on clean code, performance optimization, and delightful user experiences.
              </p>
            </GlassMorphicCard>
          </div>
          
          <div>
            <GlassMorphicCard delay={500}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                My Approach
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I believe in thoughtful design and development processes that prioritize both technical excellence and human needs. Every project begins with a deep understanding of objectives, constraints, and target users.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My work combines rigorous engineering with creative problem-solving, resulting in applications that are both robust and intuitive to use.
              </p>
            </GlassMorphicCard>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10 opacity-0 animate-fadeIn" style={{ animationDelay: '600ms' }}>
          My Expertise
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <GlassMorphicCard key={skill.title} delay={700 + index * 100}>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <skill.icon size={20} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {skill.description}
                </p>
              </div>
            </GlassMorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
