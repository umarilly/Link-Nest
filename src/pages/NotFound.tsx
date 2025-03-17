
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-gray-900 dark:text-white mb-4 animate-fadeIn">
          404
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          Oops! The page you're looking for doesn't exist.
        </p>
        
        <div className="animate-fadeIn" style={{ animationDelay: '400ms' }}>
          <a 
            href="/" 
            className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={18} />
            <span>Return Home</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
