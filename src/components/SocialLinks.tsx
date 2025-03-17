
import { Github, Linkedin, Twitter, ExternalLink, Mail, Globe, Codepen, Facebook, Instagram, Youtube, MessageSquare, Share2, MessageSquare as Discord, Network, Bookmark, MailQuestion, FileText, Twitch, FileCode, MessagesSquare, FileSpreadsheet, BookOpen } from 'lucide-react';
import GlassMorphicCard from './GlassMorphicCard';
import AnimatedText from './AnimatedText';

type SocialLinkCategory = {
  name: string;
  links: SocialLink[];
}

type SocialLink = {
  name: string;
  icon: any;
  url: string;
  color: string;
}

const SocialLinks = () => {
  const socialLinkCategories: SocialLinkCategory[] = [
    {
      name: "Professional",
      links: [
        { 
          name: 'GitHub', 
          icon: Github, 
          url: 'https://github.com/yourusername',
          color: 'hover:bg-white hover:text-black'
        },
        { 
          name: 'LinkedIn', 
          icon: Linkedin, 
          url: 'https://linkedin.com/in/yourusername',
          color: 'hover:bg-[#0A66C2] hover:text-white'
        },
        { 
          name: 'Twitter', 
          icon: Twitter, 
          url: 'https://twitter.com/yourusername',
          color: 'hover:bg-[#1DA1F2] hover:text-white'
        },
        { 
          name: 'Dev.to', 
          icon: ExternalLink, 
          url: 'https://dev.to/yourusername',
          color: 'hover:bg-white hover:text-black'
        },
        { 
          name: 'Portfolio', 
          icon: Globe, 
          url: 'https://yourportfolio.com',
          color: 'hover:bg-purple hover:text-white'
        },
        { 
          name: 'Email', 
          icon: Mail, 
          url: 'mailto:your.email@example.com',
          color: 'hover:bg-white hover:text-black'
        },
        { 
          name: 'CodePen', 
          icon: Codepen, 
          url: 'https://codepen.io/yourusername',
          color: 'hover:bg-[#1E1F26] hover:text-white'
        },
        { 
          name: 'Stack Overflow', 
          icon: FileCode, 
          url: 'https://stackoverflow.com/users/youruserid',
          color: 'hover:bg-[#F48024] hover:text-white'
        },
        { 
          name: 'Medium', 
          icon: FileText, 
          url: 'https://medium.com/@yourusername',
          color: 'hover:bg-black hover:text-white'
        }
      ]
    },
    {
      name: "Social Media",
      links: [
        { 
          name: 'Facebook', 
          icon: Facebook, 
          url: 'https://facebook.com/yourusername',
          color: 'hover:bg-[#1877F2] hover:text-white'
        },
        { 
          name: 'Instagram', 
          icon: Instagram, 
          url: 'https://instagram.com/yourusername',
          color: 'hover:bg-[#E4405F] hover:text-white'
        },
        { 
          name: 'YouTube', 
          icon: Youtube, 
          url: 'https://youtube.com/c/yourusername',
          color: 'hover:bg-[#FF0000] hover:text-white'
        },
        { 
          name: 'TikTok', 
          icon: MessageSquare, 
          url: 'https://tiktok.com/@yourusername',
          color: 'hover:bg-[#000000] hover:text-white'
        },
        { 
          name: 'Threads', 
          icon: Share2, 
          url: 'https://threads.net/@yourusername',
          color: 'hover:bg-[#000000] hover:text-white'
        }
      ]
    },
    {
      name: "Other Platforms",
      links: [
        { 
          name: 'Mastodon', 
          icon: Network, 
          url: 'https://mastodon.social/@yourusername',
          color: 'hover:bg-[#6364FF] hover:text-white'
        },
        { 
          name: 'Discord', 
          icon: Discord, 
          url: 'https://discord.gg/yourinvitecode',
          color: 'hover:bg-[#5865F2] hover:text-white'
        },
        { 
          name: 'BlueSky', 
          icon: Share2, 
          url: 'https://bsky.app/profile/yourusername',
          color: 'hover:bg-[#0285FF] hover:text-white'
        },
        { 
          name: 'Pinterest', 
          icon: Bookmark, 
          url: 'https://pinterest.com/yourusername',
          color: 'hover:bg-[#E60023] hover:text-white'
        },
        { 
          name: 'Quora', 
          icon: MailQuestion, 
          url: 'https://quora.com/profile/yourusername',
          color: 'hover:bg-[#B92B27] hover:text-white'
        },
        { 
          name: 'Substack', 
          icon: FileText, 
          url: 'https://yourusername.substack.com',
          color: 'hover:bg-[#FF6719] hover:text-white'
        },
        { 
          name: 'Twitch', 
          icon: Twitch, 
          url: 'https://twitch.tv/yourusername',
          color: 'hover:bg-[#9146FF] hover:text-white'
        },
        { 
          name: 'Daily.dev', 
          icon: BookOpen, 
          url: 'https://app.daily.dev/yourusername',
          color: 'hover:bg-[#151618] hover:text-white'
        },
        { 
          name: 'Hashnode', 
          icon: FileText, 
          url: 'https://hashnode.com/@yourusername',
          color: 'hover:bg-[#2962FF] hover:text-white'
        },
        { 
          name: 'HackerNoon', 
          icon: FileCode, 
          url: 'https://hackernoon.com/@yourusername',
          color: 'hover:bg-[#00FE00] hover:text-black'
        },
        { 
          name: 'DZone', 
          icon: FileSpreadsheet, 
          url: 'https://dzone.com/users/yourusername',
          color: 'hover:bg-[#2196F3] hover:text-white'
        },
        { 
          name: 'Reddit', 
          icon: MessagesSquare, 
          url: 'https://reddit.com/user/yourusername',
          color: 'hover:bg-[#FF4500] hover:text-white'
        }
      ]
    }
  ];

  return (
    <section id="social" className="py-16 px-4 bg-black-100/80">
      <div className="container max-w-5xl mx-auto">
        <AnimatedText 
          text="Connect With Me"
          className="text-3xl md:text-4xl font-display font-bold text-gradient text-center mb-12"
        />
        
        {socialLinkCategories.map((category, categoryIndex) => (
          <div key={category.name} className="mb-12 last:mb-0">
            <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-6 opacity-0 animate-fadeIn" 
                style={{ animationDelay: `${100 + categoryIndex * 100}ms` }}>
              {category.name}
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {category.links.map((link, index) => (
                <GlassMorphicCard 
                  key={link.name}
                  className="flex flex-col items-center justify-center py-8" 
                  delay={300 + (categoryIndex * 200) + (index * 100)}
                >
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon group ${link.color}`}
                    aria-label={`Visit my ${link.name} profile`}
                  >
                    <link.icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
                  </a>
                  <span className="mt-4 text-sm font-medium text-white-100">
                    {link.name}
                  </span>
                </GlassMorphicCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
