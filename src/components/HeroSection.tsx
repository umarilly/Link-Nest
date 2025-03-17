
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import AnimatedText from './AnimatedText';
import GlassMorphicCard from './GlassMorphicCard';
import ThreeJSBackground from './ThreeJSBackground';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 pb-12 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black-100 -z-10"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="moving-blob w-[500px] h-[500px] animate-first top-[0%] left-[30%]"></div>
        <div className="moving-blob w-[800px] h-[800px] animate-second opacity-70 top-[5%] left-[25%]"></div>
        <div className="moving-blob w-[600px] h-[600px] animate-third top-[30%] left-[60%]"></div>
      </div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-dot-white/10 -z-10"></div>
      
      {/* 3D Background */}
      <div className="absolute inset-0 -z-5">
        <ThreeJSBackground />
      </div>
      
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Cover Image Section */}
          <div className="w-full max-w-3xl h-48 sm:h-60 md:h-72 rounded-xl overflow-hidden mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black-100/90 z-10"></div>
            {/* Enhanced cover design */}
            <div className="w-full h-full bg-gradient-to-br from-purple/30 to-blue-100/50 relative">
              {/* Geometric patterns */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-32 h-32 rounded-full bg-purple/20 animate-float" style={{ left: '15%', top: '20%' }}></div>
                <div className="absolute w-20 h-20 rounded-full bg-blue-100/20 animate-float" style={{ animationDelay: '1s', right: '20%', top: '40%' }}></div>
                <div className="absolute w-16 h-16 rounded-md bg-white/10 animate-float" style={{ animationDelay: '2s', left: '30%', bottom: '20%' }}></div>
                <div className="absolute w-24 h-24 rounded-md rotate-45 bg-purple/15 animate-float" style={{ animationDelay: '1.5s', right: '30%', bottom: '30%' }}></div>
              </div>

              {/* Light streaks */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[500px] h-[50px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 animate-pulse" style={{ left: '-10%', top: '50%' }}></div>
                <div className="absolute w-[300px] h-[30px] bg-gradient-to-r from-transparent via-purple/30 to-transparent -rotate-45 animate-pulse" style={{ right: '0%', top: '30%', animationDelay: '2s' }}></div>
              </div>

              {/* Abstract tech nodes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-12 grid-rows-6 gap-x-16 gap-y-10 w-full h-full opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`w-1 h-1 rounded-full bg-white shimmer`} style={{
                      gridColumn: `${2 + Math.floor(Math.random() * 10)}`,
                      gridRow: `${1 + Math.floor(Math.random() * 5)}`,
                    }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Avatar */}
          <div className="relative mb-6 -mt-16 z-20">
            <div className="rounded-full p-1 bg-gradient-to-r from-purple to-blue-100">
              <Avatar className="w-28 h-28 border-4 border-black-100">
                <AvatarImage src="/placeholder.svg" alt="Your Name" />
                <AvatarFallback className="bg-black-200 text-white text-xl">YN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <GlassMorphicCard className="inline-block mb-6 py-2 px-4" delay={200}>
            <p className="text-sm text-white-100 font-medium">
              Software Engineer & Developer
            </p>
          </GlassMorphicCard>
          
          <AnimatedText 
            text="Your Name"
            className="text-4xl md:text-6xl font-display font-bold text-gradient leading-tight mb-6"
            delay={400}
          />
          
          <AnimatedText 
            text="Connect with me on various platforms"
            className="max-w-2xl text-lg text-white-100 leading-relaxed mb-10"
            delay={600}
          />
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fadeIn" style={{ animationDelay: '800ms' }}>
            <a 
              href="#social" 
              className="bg-gradient-to-r from-purple to-blue-100 hover:opacity-90 text-black-100 px-8 py-3 rounded-full font-medium shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Connect With Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fadeIn animate-pulse" style={{ animationDelay: '1200ms' }}>
        <a 
          href="#social" 
          aria-label="Scroll down"
          className="flex items-center justify-center w-10 h-10 rounded-full glass"
        >
          <ArrowDown size={20} className="text-white" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
