
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black-100 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#hero" 
              className="text-xl font-display font-bold text-white"
            >
              Your<span className="text-purple">Links</span>
            </a>
            <p className="text-white-100 mt-2 max-w-md">
              Connect with me across different platforms.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-100 hover:text-purple transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-100 hover:text-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-100 hover:text-purple transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white-100 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          
          <div className="text-white-100 text-sm flex items-center">
            Made with <Heart size={14} className="inline-block text-purple mx-1" /> and code
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
