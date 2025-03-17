
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface GlassMorphicCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

const GlassMorphicCard: React.FC<GlassMorphicCardProps> = ({
  children,
  className,
  delay = 0,
  hoverEffect = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fadeIn');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass rounded-2xl p-6 opacity-0 transition-all duration-300",
        hoverEffect && "hover:shadow-hover transform hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassMorphicCard;
