
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black-100 dark:bg-black-100 overflow-hidden">
      <main>
        <HeroSection />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
